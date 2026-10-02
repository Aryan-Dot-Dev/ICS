/**
 * Backend API base URL — resolved once from the environment.
 *
 * Contract (single source of truth, replaces the three-way split of a
 * hardcoded gateway URL, a test preload and the Docker default):
 *
 * 1. VITE_BACKEND_URL set (any environment) -> used verbatim.
 * 2. Production builds with an empty value -> same-origin relative URLs.
 * 3. VITE_BACKEND_URL unset during dev -> http://localhost:8000.
 *
 * IMPORTANT: this module runs in the BROWSER. Only `import.meta.env` is
 * available here — never `process.env`.
 */

function resolveBackendUrl(): string {
  const env = (import.meta as { env?: Record<string, string | undefined> }).env ?? {};
  const configured = env.VITE_BACKEND_URL;

  if (configured !== undefined) {
    if (configured === "") return "";
    if (!/^https?:\/\//.test(configured)) {
      console.error(
        `[api] Invalid VITE_BACKEND_URL "${configured}" — must start with http:// or https://. Falling back to same-origin relative URLs.`,
      );
      return "";
    }
    return configured.replace(/\/+$/, "");
  }

  // Dev default: the local Bun API server (`bun run serve:api`).
  return "http://localhost:8000";
}

export const API_BASE_URL: string = resolveBackendUrl();

export function apiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}
