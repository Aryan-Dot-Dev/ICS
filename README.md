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
`bun run start` as the start command. The OKF knowledge base is contained in
`backend/govt-schemes-okf/` and is bundled into `backend/dist/` during build.

## Root convenience commands

From the repository root, `bun run dev:frontend`, `bun run dev:backend`,
`bun run typecheck`, and `bun run test` delegate to the two packages. The
legacy root `Dockerfile` and `build:demo` script remain available for the
single-container demo deployment.
