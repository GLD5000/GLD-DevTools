import { NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */
async function handler(request: NextRequest) {
  if (request.method === "GET") {
    const ipaddress = request.ip || "IP Not Found";
    const requestHeaders = new Headers(request.headers);
    const language = requestHeaders.get("accept-language");
    const software = requestHeaders.get("user-agent");
    return new Response(
      JSON.stringify({
        ipaddress,
        language,
        software,
      }),
    );
  }
  throw new Error(
    `The HTTP ${request.method} method is not supported at this route.`,
  );
}

export { handler as GET };
