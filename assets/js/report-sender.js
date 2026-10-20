/**
 * 通用测评报告邮件发送模块 (ReportSender)
 * 解决大报告超出邮件服务限制的问题
 * 
 * 两种发送模式：
 * 1. send()          —— 发送精简摘要（不依赖外部服务，立即可用）
 * 2. sendFullReport() —— 发送完整报告（需要部署 report-worker.js，报告托管后邮件发链接）
 * 
 * 使用方式：
 *   <script src="/assets/js/report-sender.js"></script>
 *   await ReportSender.sendFullReport('user@example.com', '16PF测评报告', '<html>...</html>');
 */
(function() {
    'use strict';

    const API_URL = 'https://gmailsend.404108.xyz/';
    const REPORT_STORE_URL = 'https://report.404108.xyz/store'; // 部署 report-worker.js 后生效
    const TIMEOUT_MS = 15000;
    const STORE_TIMEOUT_MS = 20000;
    const MAX_RETRIES = 2;

    function sendWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        return fetch(url, { ...options, signal: controller.signal })
            .finally(() => clearTimeout(id));
    }

    async function sendMailWithRetry(payload, retriesLeft) {
        try {
            const response = await sendWithTimeout(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }, TIMEOUT_MS);
            if (!response.ok) throw new Error('HTTP ' + response.status);
            let data = null;
            try { data = await response.json(); } catch (e) { /* ignore */ }
            if (data && data.status === 'success') return { ok: true };
            throw new Error((data && data.message) ? data.message : '邮件服务返回未知错误');
        } catch (err) {
            if (retriesLeft > 0) {
                await new Promise(r => setTimeout(r, 2000));
                return sendMailWithRetry(payload, retriesLeft - 1);
            }
            return { ok: false, error: err.message || '网络请求失败' };
        }
    }

    /**
     * 生成邮件正文外壳
     */
    function wrapBody(summaryHtml, tip) {
        return `<div style="font-family:'Microsoft YaHei',Arial,sans-serif;padding:20px;line-height:1.8;color:#333;max-width:640px;margin:auto;">
    <div style="background:#ffffff;padding:24px;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        ${summaryHtml}
    </div>
    ${tip ? `<div style="margin-top:20px;padding:14px 18px;background:#f0fdf4;border-radius:8px;border-left:4px solid #16a34a;color:#166534;font-size:13px;line-height:1.6;">
        <strong>提示：</strong>${tip}
    </div>` : ''}
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
    <p style="font-size:12px;color:#9ca3af;text-align:center;">
        本邮件由 心灵方舟 自动发送 · 测评结果仅供参考，不作为临床诊断依据
    </p>
</div>`;
    }

    /**
     * 发送精简版报告邮件
     * @param {Object} opts
     * @param {string} opts.email      收件人邮箱
     * @param {string} opts.subject    邮件主题
     * @param {string} opts.summaryHtml 精简摘要 HTML（建议 < 5KB）
     * @param {string} [opts.tip]      完整报告提示语
     * @returns {Promise<{ok:boolean, error?:string}>}
     */
    async function send(opts) {
        if (!opts || !opts.email || !opts.subject || !opts.summaryHtml) {
            return { ok: false, error: '参数不完整，需要 email、subject、summaryHtml' };
        }
        const body = wrapBody(opts.summaryHtml, opts.tip || '详细解读请返回测评页面查看，或使用页面上的"导出测评结果"功能保存完整报告。');
        return sendMailWithRetry({
            email: opts.email,
            subject: opts.subject,
            body: body
        }, MAX_RETRIES);
    }

    /**
     * 发送完整报告邮件（报告托管 + 链接）
     * 流程：上传完整 HTML 到 Cloudflare Worker → 获得短链接 → 邮件发送链接
     * 
     * @param {string} email    收件人邮箱
     * @param {string} subject  邮件主题
     * @param {string} fullHtml 完整报告 HTML（建议包含完整 <html> 外壳）
     * @returns {Promise<{ok:boolean, error?:string, url?:string}>}
     */
    async function sendFullReport(email, subject, fullHtml) {
        if (!email || !subject || !fullHtml) {
            return { ok: false, error: '参数不完整' };
        }

        // 步骤1：尝试上传报告到托管服务
        let viewUrl = null;
        try {
            const storeRes = await sendWithTimeout(REPORT_STORE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/html' },
                body: fullHtml
            }, STORE_TIMEOUT_MS);

            if (storeRes.ok) {
                const data = await storeRes.json();
                if (data && data.status === 'success' && data.url) {
                    viewUrl = data.url;
                }
            }
        } catch (err) {
            console.warn('[报告托管] 上传失败:', err.message);
        }

        // 步骤2：如果上传成功，邮件发链接；否则降级为精简摘要
        if (viewUrl) {
            const summaryHtml = `
                <h2 style="color:#006400;text-align:center;margin-bottom:16px;">${subject}</h2>
                <p style="text-align:center;font-size:15px;line-height:1.8;">
                    您的测评报告已生成，请点击下方按钮查看完整报告。<br>
                    <a href="${viewUrl}" style="display:inline-block;margin-top:16px;padding:12px 28px;background:#006400;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:16px;">查看完整报告</a>
                </p>
                <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:12px;">链接地址：${viewUrl}</p>
            `;
            const result = await send({
                email: email,
                subject: subject,
                summaryHtml: summaryHtml,
                tip: '报告链接 7 天内有效，建议及时查看或导出保存。'
            });
            return { ...result, url: viewUrl };
        }

        // 降级：报告托管服务未部署或不可用，发精简版
        console.warn('[报告托管] 未部署，降级为精简摘要模式');
        return {
            ok: false,
            error: '完整报告发送失败：报告托管服务未部署。\n\n解决方案：\n1. 部署 cloudflare/report-worker.js 到你的 Cloudflare Worker\n2. 将域名绑定到 report-sender.js 的 REPORT_STORE_URL 配置中\n3. 重新测试即可发送完整报告。\n\n临时方案：请使用页面上的"导出测评结果"功能保存完整报告到本地。'
        };
    }

    // 暴露到全局
    window.ReportSender = {
        send: send,
        sendFullReport: sendFullReport
    };

    console.log('=== ReportSender 模块已加载 ===');
})();
