import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

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
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
