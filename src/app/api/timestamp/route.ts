import { NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */

function processDateString(input: string) {
  if (!input || input.length === 0) return new Date();
  const isArray = Array.isArray(input);
  if (!isArray || (isArray && input.length === 1)) {
    const dateFromNum = new Date(Number(isArray ? input[0] : input));
    const dateFromNumInvalid = dateFromNum.toString() === "Invalid Date";
    if (!dateFromNumInvalid) return dateFromNum;
  }

  const dateFromStr = new Date(isArray ? `${input.join("/")}/08:00` : input);
  const dateFromStrInvalid = dateFromStr.toString() === "Invalid Date";
  return dateFromStrInvalid ? new Date() : dateFromStr;
}

async function handler(request: NextRequest) {
  if (request.method === "GET") {
    const url = new URL(request.url);
    const query = url.searchParams.get("date");
    const newDate = query ? processDateString(query) : new Date();
    const utc = newDate.toString();
    const unix = newDate.getTime();

    return new Response(JSON.stringify({ unix, utc }));
  }
  throw new Error(
    `The HTTP ${request.method} method is not supported at this route.`,
  );
}

export { handler as GET };
