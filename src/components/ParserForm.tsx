"use client";

import { useState } from "react";
import Parsers from "@/markdown/parsers/allParsers.mdx";
import MdxWrapper from "./markdownComponents/MdxWrapper";

export default function ParserForm({
  parserTitle,
  parsingFunction,
  placeholderText = "Paste your string here...",
}: {
  parserTitle: string;
  parsingFunction: string;
  placeholderText?: string;
}) {
  const [input, setInput] = useState("");
  const [output, setoutput] = useState("");
  async function handleParse() {
    const result = await fetch(`/parser/${parsingFunction}/`, {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });
    const body = await result.json();
    const parsed = body.data || body.message;
    setoutput(parsed);
  }
  function handleCopy() {
    navigator.clipboard.writeText(output);
  }
  return (
    <div className="w-fit h-fit m-auto p-10 grid gap-4">
      <MdxWrapper>
        <Parsers />
      </MdxWrapper>

      <h2 className="text-4xl font-bold">{parserTitle}</h2>
      <pre>{`method: POST,
body: {text: text}
path: https://gld-dev-tools.vercel.app/parser/${parsingFunction}/`}</pre>
      <textarea
        className="text-black w-full max-w-[1000px] min-w-[280px] resize"
        name="input"
        placeholder={placeholderText}
        onInput={(e) => setInput(e.currentTarget.value)}
        value={input}
      />
      <button type="button" onClick={handleParse}>
        Parse
      </button>
      <button type="button" onClick={handleCopy}>
        Copy
      </button>
      <p className="w-full max-w-[1000px] text-ellipsis line-clamp-3 overflow-hidden">
        {output}
      </p>
    </div>
  );
}
