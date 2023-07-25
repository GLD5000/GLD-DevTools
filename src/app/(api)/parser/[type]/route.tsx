import { NextRequest } from "next/server";
import tsvToGfmTable from "@/utils/parseTsvToGfmTable";

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

  return new Response(
    JSON.stringify({
      status: 400,
      message: `Parser type: ${type} is not recognised or does not exist.`,
    }),
  );
}
