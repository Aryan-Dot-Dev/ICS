# Infou Consultancy Services monorepo

The repository is split into two independently deployable applications:

```bash
bun install
```

## Frontend

The `frontend/` folder is a standalone Bun/React static app. Copy
`frontend/.env.example` to `frontend/.env` and set `VITE_BACKEND_URL` when the
API is deployed on a separate origin. Leave it empty for same-origin hosting,
then:

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

Deploy it with `backend/Dockerfile`, or run `bun run start` on a Bun host. The
OKF knowledge base is contained in `backend/govt-schemes-okf/` and is loaded
relative to the backend package at runtime.

## Root convenience commands

From the repository root, `bun run dev:frontend`, `bun run dev:backend`,
`bun run typecheck`, and `bun run test` delegate to the two packages. The
legacy root `Dockerfile` and `build:demo` script remain available for the
single-container demo deployment.
