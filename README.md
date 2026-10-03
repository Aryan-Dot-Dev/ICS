# Infou Consultancy Services monorepo

The repository is split into two independently deployable applications:

```bash
bun install
```

## Frontend

The `frontend/` folder is a standalone Bun/React static app. Copy
`frontend/.env.example` to `frontend/.env` and set `VITE_BACKEND_URL` when you
need to override the production API origin. The current backend Worker URL is
used by default, then:

```bash
cd frontend
bun install
bun run dev
bun run build
```

Deploy `frontend/dist/` to a static host, or build the included
`frontend/Dockerfile` with `--build-arg VITE_BACKEND_URL=https://api.example.com`.

## Backend

The `backend/` folder is a standalone Bun API. Copy `backend/.env.example` to
`backend/.env` and provide the required lead-storage and export-auth values:

```bash
cd backend
bun install
bun run dev
```

Deploy it with `backend/Dockerfile`. For a Bun service deployment with
`backend/` as the project root, use `bun run build` as the build command and
`bun run start` as the start command.

The backend also has a Cloudflare Workers entrypoint. From `backend/`, run
`bun run worker:generate-data` when the OKF Markdown changes, then use
`bun run dev` for Bun or `bun run worker:dev` for Workers. Deploy the Worker
with `bun run deploy` (equivalent to `bunx wrangler deploy`). The Worker
bundles `worker-data.json`, a generated normalized copy of
`backend/govt-schemes-okf/`, because Workers cannot read the filesystem at
runtime. Set Worker secrets such as `LEAD_SHEETS_URL`, `LEADS_EXPORT_TOKEN`,
and any optional LLM keys in the Cloudflare dashboard or with Wrangler.
For durable lead records, create a KV namespace and bind it as `LEADS_KV` in
`wrangler.jsonc`; without that optional binding, the Worker keeps leads in
memory and still forwards them to `LEAD_SHEETS_URL`.

## Root convenience commands

From the repository root, `bun run dev:frontend`, `bun run dev:backend`,
`bun run typecheck`, and `bun run test` delegate to the two packages. The
legacy root `Dockerfile` and `build:demo` script remain available for the
single-container demo deployment.
