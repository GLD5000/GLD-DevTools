"use client";

import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import { ReactNode, useEffect, useState } from "react";

export default function MortgageInput({
  message,
  title,
  defaultValue,
  isString = false,
  children,
}: {
  message: string;
  title: string;
  defaultValue: number | string;
  isString?: boolean;
  children?: ReactNode;
}) {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    let run = true;
    if (run && window) {
      const parameter = getQueryParameter(title);
      console.log("parameter:", parameter);
      if (parameter && isString) {
        console.log("title:", title);
        setState(parameter);
      }
      if (parameter && !isString) {
        setState(Number(parameter));
      }
    }
    return () => {
      run = false;
    };
  }, []);
  return (
    <>
      <label
        className={`grid items-center p-0 ${
          isString
            ? "grid-cols-[1fr_auto] w-[min(100%,50rem)]"
            : "grid-cols-1 w-40"
        }`}
      >
        {`${message}: `}

        {isString ? (
          <input
            className="block m-0 text-white placeholder:text-white bg-transparent border border-current rounded w-fit p-1 text-center ml-auto"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={(e) => updateQueryParams(title, `${e.target.value}`)}
          />
        ) : (
          <input
            className="block m-0 text-black placeholder:text-black bg-[#f0f0f0] rounded w-40 p-1 text-center"
            type="number"
            value={state}
            onChange={(e) => setState(Number(e.target.value))}
            onBlur={(e) => updateQueryParams(title, `${e.target.value}`)}
          />
        )}
      </label>
      {children}
    </>
  );
}
