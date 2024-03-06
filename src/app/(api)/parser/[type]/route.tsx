import { NextRequest } from "next/server";
import tsvToGfmTable from "@/utils/parseTsvToGfmTable";
import tsvToMdBulletPoints from "@/utils/parseTsvToMdBulletPoints";
import parseTsvToJsonArray from "@/utils/parseTsvToJsonArray";
import parseTsvToJsonObject from "@/utils/parseTsvToJsonObject";

/* eslint-disable import/prefer-default-export */

interface ReqBody {
  text: string;
}
interface Params {
  type: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Params },
) {
  const body = (await request.json()) as ReqBody;
  const { text } = body;
  const { type } = params;

  if (type === "tsvToGfmTable")
    return new Response(
      JSON.stringify({ data: tsvToGfmTable(text), status: 200 }),
    );
  if (type === "tsvToMdBulletPoints")
    return new Response(
      JSON.stringify({ data: tsvToMdBulletPoints(text), status: 200 }),
    );
  if (type === "tsvToJsonArray")
    return new Response(
      JSON.stringify({ data: parseTsvToJsonArray(text), status: 200 }),
    );
  if (type === "parseTsvToJsonObject")
    return new Response(
      JSON.stringify({ data: parseTsvToJsonObject(text), status: 200 }),
    );

  return new Response(
    JSON.stringify({
      status: 400,
      message: `Parser type: ${type} is not recognised or does not exist.`,
    }),
  );
}
