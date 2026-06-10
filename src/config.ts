export const BACKEND_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:8000"
        : "https://ospywzpew5.execute-api.ap-southeast-2.amazonaws.com/dev";