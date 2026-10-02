/**
 * Backend API base URL — resolved once from the environment.
 *
 * Contract (single source of truth, replaces the three-way split of a
 * hardcoded gateway URL, a test preload and the Docker default):
 *
 * 1. VITE_BACKEND_URL set (any environment) -> used verbatim.
 * 2. Production builds with an empty value -> same-origin relative URLs.
 * 3. VITE_BACKEND_URL unset on localhost -> http://localhost:8000.
 * 4. VITE_BACKEND_URL unset in production -> the deployed backend Worker.
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

  // Keep local development pointed at the local Bun API, while production
  // builds remain functional even when the host omits the build variable.
  const hostname = typeof location !== "undefined" ? location.hostname : "";
  if (hostname === "localhost" || hostname === "127.0.0.1") return "http://localhost:8000";
  return "https://ics-backend.aryan-main21.workers.dev";
}

export const API_BASE_URL: string = resolveBackendUrl();

export function apiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}
