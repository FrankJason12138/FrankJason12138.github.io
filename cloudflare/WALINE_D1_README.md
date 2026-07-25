This directory contains a Cloudflare Worker implementing a minimal Waline-compatible API that stores comments in a Cloudflare D1 database.

Setup steps:
1. Create a D1 database in Cloudflare (D1) and create a `comments` table with this schema:

   CREATE TABLE comments (
     id TEXT PRIMARY KEY,
     url TEXT NOT NULL,
     nickname TEXT,
     mail TEXT,
     site TEXT,
     content TEXT,
     parent_id TEXT,
     created_at TEXT,
     approved INTEGER DEFAULT 1
   );

2. Deploy the Worker and bind the D1 database to the Worker as the environment variable `COMMENTS_D1`.
   Example `wrangler.toml` snippet:

   [[d1_databases]]
   binding = "COMMENTS_D1"
   database_name = "your-d1-name"

3. Set your Waline `site.comments.waline_serverUrl` in `_config.yml` to the Worker URL (for example, `https://<your-worker-subdomain>.workers.dev`).

4. The Worker provides endpoints under `/api/`:
   - GET /api/comment?type=list&url=<encoded-url>&page=1&pageSize=20
     -> returns { errno:0, data: { total: N, comments: [...] } }
   - GET /api/comment?type=count&url=<comma-separated-urls>
     -> returns counts mapping for each url
   - POST /api/comment  (JSON body, accepts { comment: { ... } } or direct fields)
     -> inserts a comment and returns created comment object

Notes & limitations:
- This is a minimal implementation for basic listing and creating comments. It returns flat comments; the Waline client will render threads based on `parent_id`.
- Authentication, moderation, image uploads, likes, and other Waline advanced features are not implemented here. Add them later as needed.
