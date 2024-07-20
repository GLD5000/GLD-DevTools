"use client";

import { getQueryParams, updateQueryParams } from "@/utils/urlQueryParams";
import { ReactNode, useEffect, useState } from "react";

export default function MortgageInput({
  message,
  title,
  defaultValue,
  children,
}: {
  message: string;
  title: string;
  defaultValue: number;
  children?: ReactNode;
}) {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    let run = true;
    if (run && window) {
      const paramsObject = getQueryParams();
      if (paramsObject[title]) {
        setState(Number(paramsObject[title]));
      }
    }
    return () => {
      run = false;
    };
  }, []);
  return (
    <>
      <label>
        {`${message}: `}
        <input
          className="text-black placeholder:text-black bg-[#f0f0f0]"
          type="number"
          value={state}
          onChange={(e) => setState(Number(e.target.value))}
          onBlur={(e) => updateQueryParams(title, `${e.target.value}`)}
        />
      </label>
      {children}
    </>
  );
}
