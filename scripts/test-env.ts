// Bun test preload: encodes the documented local-dev convention that the Bun
// API server (bun run serve:api) listens on http://localhost:8000 and the
// frontend routes API requests there in development. Explicitly configured
// environments (e.g. a deployed gateway) are left untouched.
process.env.VITE_BACKEND_URL ??= "http://localhost:8000";
process.env.NODE_ENV ??= "test";
