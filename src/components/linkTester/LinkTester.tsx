"use client";

import React, { useState } from "react";

function handleClick(width: string, link: string) {
  // window.open('https://google.com', 'popup', 'width=200');
  window.open(link, "_blank", `width=${width},height=800`);
}
export default function LinkTester() {
  const [link, setLink] = useState("https://contrast-lab.vercel.app/");
  const widthsArray: string[] = [
    "320",
    "767",
    "768",
    "1023",
    "1024",
    "1199",
    "1200",
    "1920",
  ];
  return (
    <div className="grid gap-2 mx-auto w-full bg-black max-w-xl">
      <h2 style={{ all: "unset" }}>
        <span className="block text-3xl text-center mb-4 underline dark:text-white text-black">
          Responsive Screen Size Tester
        </span>
      </h2>
      <span className="block text-xl dark:text-white text-black">
        Enter a URL and click below to see it open at different screen sizes...
      </span>
      <input
        className="text-xl placeholder:text-black text-black"
        value={link}
        onChange={(e) => setLink(e.currentTarget.value)}
        width={200}
      />
      {widthsArray.map((width, index) => {
        const key = `button-${index}`;
        return (
          <button
            className=" delay-75 transition-[300] bg-black hover:translate-x-3 text-white hover:invert w-60 mx-auto border-2 border-white rounded p-1"
            key={key}
            type="button"
            onClick={() => handleClick(width, link)}
          >
            {`@${width}px `}&rarr;
          </button>
        );
      })}
    </div>
  );
}
