// waline-worker.js
// Cloudflare Worker to provide a minimal Waline-compatible API backed by D1.
// Requirements:
// - Bind your D1 database to the Worker as environment binding name: MY_BINDING
// - Create a table `comments` with schema suggested in WALINE_D1_README.md below.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Only support CORS from any origin for now
    const CORS_HEADERS = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    try {
      if (url.pathname === '/api/comment') {
        if (request.method === 'GET') {
          const params = url.searchParams;
          const type = params.get('type') || 'list';
          const db = env.MY_BINDING;

          if (type === 'count') {
            // support comma-separated urls
            const urlParam = params.get('url') || params.get('paths') || '';
            const urls = urlParam.split(',').map(u => decodeURIComponent(u).trim()).filter(Boolean);
            if (urls.length === 0) {
              return json({ errno: 0, data: {} }, { headers: CORS_HEADERS });
            }
            const placeholders = urls.map(() => '?').join(',');
            const query = `SELECT url, COUNT(*) AS cnt FROM comments WHERE url IN (${placeholders}) GROUP BY url`;
            const stmt = db.prepare(query);
            const res = await stmt.bind(...urls).all();
            const counts = {};
            for (const r of res.results) counts[r.url] = r.cnt;
            return json({ errno: 0, data: counts }, { headers: CORS_HEADERS });
          }

          // list
          const urlParam = params.get('url') || params.get('path') || params.get('paths') || '';
          const target = decodeURIComponent(urlParam).trim();
          const page = Math.max(1, parseInt(params.get('page') || '1'));
          const pageSize = Math.min(100, Math.max(1, parseInt(params.get('pageSize') || '20')));
          if (!target) return json({ errno: 0, data: { total: 0, comments: [] } }, { headers: CORS_HEADERS });

          // fetch comments for this url (flat). Waline client can build tree from parent_id.
          const offset = (page - 1) * pageSize;
          const listStmt = db.prepare('SELECT * FROM comments WHERE url = ? ORDER BY created_at DESC LIMIT ? OFFSET ?');
          const listRes = await listStmt.bind(target, pageSize, offset).all();
          const countStmt = db.prepare('SELECT COUNT(*) AS total FROM comments WHERE url = ?');
          const countRes = await countStmt.bind(target).all();
          const total = (countRes.results && countRes.results[0]) ? countRes.results[0].total : 0;

          return json({ errno: 0, data: { total, comments: listRes.results || [] } }, { headers: CORS_HEADERS });
        }

        if (request.method === 'POST') {
          const db = env.MY_BINDING;
          const body = await request.json().catch(() => ({}));
          // Waline client may send { comment: { ... } } or direct fields
          const commentPayload = body.comment || body;
          const urlField = commentPayload.url || commentPayload.path || commentPayload.paths || commentPayload.urlPath || '';
          const target = Array.isArray(urlField) ? urlField.join(',') : (urlField || commentPayload.url || commentPayload.path || commentPayload.page || '');
          if (!target) return json({ errno: 1, errmsg: 'Missing url/path' }, { status: 400, headers: CORS_HEADERS });

          const id = crypto.randomUUID();
          const now = new Date().toISOString();
          const parent = commentPayload.parent || commentPayload.parent_id || commentPayload.rid || null;
          const nickname = commentPayload.nick || commentPayload.name || commentPayload.nick || '匿名';
          const mail = commentPayload.mail || '';
          const site = commentPayload.site || commentPayload.link || '';
          const content = commentPayload.comment || commentPayload.content || '';

          const insert = db.prepare('INSERT INTO comments(id, url, nickname, mail, site, content, parent_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
          await insert.bind(id, target, nickname, mail, site, content, parent, now).run();

          const created = { id, url: target, nickname, mail, site, content, parent_id: parent, created_at: now, approved: 1 };
          return json({ errno: 0, data: created }, { headers: CORS_HEADERS, status: 201 });
        }
      }

      // fallback
      return json({ errno: 0, data: null });
    } catch (err) {
      return json({ errno: 1, errmsg: String(err) }, { status: 500 });
    }
  }
};

function json(obj, opts = {}) {
  const headers = Object.assign({'Content-Type':'application/json;charset=UTF-8'}, opts.headers || {});
  return new Response(JSON.stringify(obj), Object.assign({ status: opts.status || 200, headers }, {}));
}
