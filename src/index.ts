import { serve } from "bun";
import index from "./index.html";
import path from "node:path";

const isProd = process.env.NODE_ENV === "production";

const routes: Record<string, any> = {
  "/robots.txt": () => new Response("User-agent: *\nAllow: /\n", {
    headers: { "Content-Type": "text/plain" },
  }),

  "/api/hello": {
    async GET(req) {
      return Response.json({
        message: "Hello, world!",
        method: "GET",
      });
    },
    async PUT(req) {
      return Response.json({
        message: "Hello, world!",
        method: "PUT",
      });
    },
  },

  "/api/hello/:name": async req => {
    const name = req.params.name;
    return Response.json({
      message: `Hello, ${name}!`,
    });
  },

  "/api/chat-restricted": {
    async POST(req) {
      try {
        const body = await req.json();
        const response = await fetch("http://127.0.0.1:8000/chat-restricted", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
        const data = await response.json();
        return Response.json(data, { status: response.status });
      } catch (error: any) {
        return Response.json({ detail: error.message || "Failed to contact backend." }, { status: 502 });
      }
    }
  },

  "/api/recommend-schemes": {
    async POST(req) {
      try {
        const body = await req.json();
        const response = await fetch("http://127.0.0.1:8000/recommend-schemes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
        const data = await response.json();
        return Response.json(data, { status: response.status });
      } catch (error: any) {
        return Response.json({ detail: error.message || "Failed to contact backend." }, { status: 502 });
      }
    }
  },
};

if (isProd) {
  routes["/*"] = async (req: Request) => {
    const url = new URL(req.url);
    const safePath = path.normalize(url.pathname).replace(/^(\.\.(\/|\\|$))+/, '');
    const filePath = path.join(process.cwd(), "dist", safePath);
    const file = Bun.file(filePath);
    
    if (await file.exists()) {
      const headers: Record<string, string> = {};
      
      if (filePath.endsWith(".js")) {
        headers["Content-Type"] = "application/javascript; charset=utf-8";
        headers["Cache-Control"] = "public, max-age=31536000, immutable";
      } else if (filePath.endsWith(".css")) {
        headers["Content-Type"] = "text/css; charset=utf-8";
        headers["Cache-Control"] = "public, max-age=31536000, immutable";
      } else if (filePath.endsWith(".webp")) {
        headers["Content-Type"] = "image/webp";
        headers["Cache-Control"] = "public, max-age=31536000, immutable";
      } else if (filePath.endsWith(".svg")) {
        headers["Content-Type"] = "image/svg+xml";
        headers["Cache-Control"] = "public, max-age=31536000, immutable";
      } else if (filePath.endsWith(".txt")) {
        headers["Content-Type"] = "text/plain; charset=utf-8";
        headers["Cache-Control"] = "public, max-age=86400";
      }
      
      return new Response(file, { headers });
    }
    
    return new Response(Bun.file(path.join(process.cwd(), "dist", "index.html")), {
      headers: { 
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
      },
    });
  };
} else {
  routes["/*"] = index;
}

const server = serve({
  routes,

  development: !isProd && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
