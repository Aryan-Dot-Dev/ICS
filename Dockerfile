# Single-container DEMO deployment: builds the frontend AND runs the backend
# API server, which also serves the built static files. The backend lives in
# its own folder (backend/) and will move to a separate repository — this
# Dockerfile is the transitional demo topology.
#
#   docker build -t ics-demo .
#   docker run -p 8000:8000 ics-demo
#   open http://localhost:8000
#
# Production (backend deployed separately): build the frontend with
#   VITE_BACKEND_URL=https://api.example.com bun run build
# and deploy dist/ to any static host; the backend repo ships its own image.
FROM oven/bun:alpine

WORKDIR /app

# Install dependencies once (manifest + lockfile layer)
COPY package.json bun.lock tsconfig.json ./
RUN bun install --frozen-lockfile

# Copy application sources
COPY frontend ./frontend
COPY styles ./styles
COPY backend ./backend
COPY backend/govt-schemes-okf ./govt-schemes-okf
COPY backend/scripts ./scripts
COPY build.ts ./build.ts
COPY bunfig.toml ./bunfig.toml

# The frontend build requires the backend origin (environment contract).
# For the demo container the API is served from the same origin on port 8000.
ARG VITE_BACKEND_URL=http://localhost:8000
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN bun run build

# Runtime: backend API serves the static dist/ on one port
ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000

CMD ["bun", "backend/server.ts"]
