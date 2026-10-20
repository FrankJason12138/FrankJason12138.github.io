/**
 * Cloudflare Worker: 心理测评报告临时托管服务
 * 
 * 功能：接收完整报告 HTML，存入 KV，返回短链接；通过短链接可查看报告。
 * 保存期：7 天（604800 秒）
 * 
 * 部署步骤：
 * 1. 登录 Cloudflare Dashboard → Workers & Pages → Create a Service
 * 2. 服务名称：report-storage（任意）
 * 3. 进兠该 Worker → Settings → Variables → KV Namespace Bindings
 *    → Add binding → Variable name 填 REPORTS → 选择或新建 KV Namespace
 * 4. 复制本代码粘贴到 Worker 编辑器，点击 Deploy
 * 5. 绑定自定义域名（如 report.404108.xyz），或记住 workers.dev 地址
 * 6. 把部署后的地址填到 report-sender.js 的 REPORT_STORE_URL 中
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '*';

    // CORS 响应头
    const corsHeaders = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // 存储报告：POST /store
    if (url.pathname === '/store' && request.method === 'POST') {
      try {
        const html = await request.text();
        if (!html || html.length < 100) {
          return jsonResponse({ error: '报告内容为空或过短' }, 400, corsHeaders);
        }
        
        // 生成 8 位随机 ID（包含大小写字母和数字）
        const id = Array.from(crypto.getRandomValues(new Uint8Array(6)))
          .map(b => b.toString(36).padStart(2, '0'))
          .join('')
          .slice(0, 8);
        
        // 存入 KV，7 天过期
        await env.REPORTS.put(id, html, { expirationTtl: 604800 });
        
        const viewUrl = `https://${url.host}/view/${id}`;
        return jsonResponse({ 
          status: 'success', 
          id, 
          url: viewUrl,
          message: '报告已存储' 
        }, 200, corsHeaders);
      } catch (err) {
        return jsonResponse({ error: '存储失败: ' + err.message }, 500, corsHeaders);
      }
    }

    // 查看报告：GET /view/:id
    if (url.pathname.startsWith('/view/')) {
      const id = url.pathname.split('/')[2];
      if (!id) return new Response('Not Found', { status: 404 });
      
      try {
        const html = await env.REPORTS.get(id);
        if (!html) {
          return new Response(`
            <!DOCTYPE html><html><head><meta charset="utf-8"><title>报告已过期</title>
            <style>body{font-family:sans-serif;text-align:center;padding:60px;color:#666}</style></head>
            <body><h1>🗑️ 报告已过期</h1><p>该测评报告链接已失效（7天有效期）。</p>
            <p>请返回测评页面重新提交或联系管理员。</p></body></html>
          `, { status: 404, headers: { 'Content-Type': 'text/html' } });
        }
        return new Response(html, { 
          headers: { 
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          } 
        });
      } catch (err) {
        return new Response('获取报告失败: ' + err.message, { status: 500 });
      }
    }

    return jsonResponse({ error: 'Not Found' }, 404, corsHeaders);
  }
};

function jsonResponse(data, status, extraHeaders) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...extraHeaders
    }
  });
}
