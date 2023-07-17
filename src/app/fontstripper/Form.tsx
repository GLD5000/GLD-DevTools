"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function Form() {
  const [message, setMessage] = useState<string>("");
  const [modifiedFont, setModifiedFont] = useState<string>("");
  const [charactersToKeep, setCharactersToKeep] = useState<string>("");

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fontFile = (event.target as HTMLFormElement).fontFile.files[0];
    console.log("fontFile:", fontFile);
    const reader = new FileReader();
    console.log("reader:", reader);
    reader.onload = async (e) => {
      const fontData = e.target?.result as ArrayBuffer;
      console.log("fontData:", fontData);
      try {
        const response = await fetch("/api/stripfont", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fontData, charactersToKeep }),
        });

        const data = await response.json();
        setModifiedFont(data.modifiedFont);
        setMessage("Font characters stripped successfully!");
      } catch (error) {
        setMessage("Error occurred while processing the font file.");
      }
    };

    reader.readAsArrayBuffer(fontFile);
  };

  const handleDownload = () => {
    if (modifiedFont) {
      const link = document.createElement("a");
      link.href = `data:font/ttf;base64,${modifiedFont}`;
      link.download = "stripped_font.ttf";
      link.click();
    }
  };

  const handleCharactersToKeepChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setCharactersToKeep(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="w-fit mx-auto grid">
        <input required type="file" name="fontFile" />
        <input
          required
          className="text-black"
          type="text"
          name="charactersToKeep"
          placeholder="Characters to keep"
          value={charactersToKeep}
          onChange={handleCharactersToKeepChange}
        />
        <button type="submit">Strip Characters</button>
      </form>
      {message && <p>{message}</p>}
      {modifiedFont && (
        <div>
          <button onClick={handleDownload}>Download Modified Font</button>
        </div>
      )}
    </>
  );
}
