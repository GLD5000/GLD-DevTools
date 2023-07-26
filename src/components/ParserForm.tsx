"use client";

import { useState } from "react";

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
      <h2 className="text-4xl font-bold">{parserTitle}</h2>
      <pre>{`method: POST,
body: {text: text}
path: https://gld-dev-services.vercel.app/parser/${parsingFunction}/`}</pre>
      <textarea
        className="text-black max-w-[80vw] min-w-[280px] resize"
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
      <pre>{output}</pre>
    </div>
  );
}
