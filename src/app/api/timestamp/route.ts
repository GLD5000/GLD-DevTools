import { NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */
async function handler(request: NextRequest) {
  if (request.method === "GET") {
    const utc = new Date().toString();
    const unix = new Date().getTime();

    return new Response(JSON.stringify({ unix, utc }));
  }
  throw new Error(
    `The HTTP ${request.method} method is not supported at this route.`,
  );
}

export { handler as GET };
