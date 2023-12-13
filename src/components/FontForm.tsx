"use client";

import React, { useState } from "react";

export default function FontUploader() {
  const [fontFile, setFontFile] = useState<File | null>(null);
  const [charactersToKeep, setCharactersToKeep] = useState<string>("");

  const handleFontUpload = async () => {
    if (!fontFile) {
      // Handle error, no font file selected
      return;
    }

    const formData = new FormData();
    formData.append("font", fontFile);
    formData.append("characters", charactersToKeep);

    try {
      const response = await fetch("/api/process-font", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <div>
      <input
        required
        type="file"
        onChange={(e) => setFontFile(e.target.files?.[0] || null)}
      />
      <input
        required
        type="text"
        placeholder="Characters to keep"
        value={charactersToKeep}
        onChange={(e) => setCharactersToKeep(e.target.value)}
      />
      <button type="button" onClick={handleFontUpload}>
        Upload and Process Font
      </button>
    </div>
  );
}
