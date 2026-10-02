import { describe, expect, test } from "bun:test";
import { API_BASE_URL, apiUrl } from "./api";

describe("API client URL routing", () => {
  test("routes API requests to the external port 8000 server", () => {
    expect(API_BASE_URL).toBe("http://localhost:8000");
    expect(apiUrl("/api/recommend-schemes")).toBe("http://localhost:8000/api/recommend-schemes");
    expect(apiUrl("api/chat-restricted")).toBe("http://localhost:8000/api/chat-restricted");
  });
});
