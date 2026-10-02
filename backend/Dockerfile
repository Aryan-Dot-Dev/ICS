FROM oven/bun:alpine
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile || bun install
COPY . .

ENV NODE_ENV=production
EXPOSE 8000
CMD ["bun", "server.ts"]
