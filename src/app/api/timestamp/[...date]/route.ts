import { NextRequest } from "next/server";

/* eslint-disable import/prefer-default-export */

interface Params {
  date: string;
}

function processDateString(input: string) {
  if (!input || input.length === 0) return new Date();
  const isArray = Array.isArray(input);
  if (!isArray || (isArray && input.length === 1)) {
    const dateFromNum = new Date(Number(isArray ? input[0] : input));
    const dateFromNumInvalid = dateFromNum.toString() === "Invalid Date";
    if (!dateFromNumInvalid) return dateFromNum;
  }

  const dateFromStr = new Date(isArray ? input.join("/") : input);
  const dateFromStrInvalid = dateFromStr.toString() === "Invalid Date";
  return dateFromStrInvalid ? new Date() : dateFromStr;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
) {
  const newDate = processDateString(params.date);
  const utc = newDate.toString();
  const unix = newDate.getTime();
  return new Response(JSON.stringify({ unix, utc }));
}
