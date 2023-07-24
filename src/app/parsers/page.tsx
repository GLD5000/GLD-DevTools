"use client";

import { useState } from "react";

function gfmReducer(
  accumulator: string,
  currentString: string,
  index: number,
  array: string[],
) {
  const pipe = " | ";
  const newString = `${accumulator}${pipe}${currentString}${
    1 + index === array.length ? " |" : ""
  }`;
  return newString;
}

function createGfmRow(rowArray: string[]) {
  return rowArray.reduce(gfmReducer, "");
}
function createGfmRows(rowArrays: string[][]) {
  return rowArrays.map((rowArray) => rowArray.reduce(gfmReducer, ""));
}
function splitCells(input: string) {
  const rows = input.split(/[\r\n]+/);
  return rows.map((row) => row.split(/[\t,]/));
}

function parseTable(tsv: string) {
  const [headerArray, ...rowArrays] = splitCells(tsv);
  const headerRow = createGfmRow(headerArray);
  const numberOfColumns = headerArray.length;
  const underlineArray = new Array(numberOfColumns).fill("-");
  const underlineRow = createGfmRow(underlineArray);
  const bodyRows = createGfmRows(rowArrays);
  return [headerRow, underlineRow, ...bodyRows].join("\n");
}

export default function Parsers() {
  const [input, setInput] = useState("");
  const [output, setoutput] = useState("");
  function handleParse() {
    const parsed = parseTable(input);
    setoutput(parsed);
  }
  function handleCopy() {
    navigator.clipboard.writeText(output);
  }
  return (
    <div className="w-fit h-fit m-auto p-10 grid gap-4">
      <textarea
        className="text-black max-w-[80vw] min-w-[280px] resize"
        name="input"
        placeholder="Paste TSV here..."
        onInput={(e) => setInput(e.currentTarget.value)}
      >
        {input}
      </textarea>
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
