"use client";

import {
  getQueryParameter,
  hardUpdateQueryParams,
  updateQueryParams,
} from "@/utils/urlQueryParams";
import { ReactNode, useEffect, useState } from "react";

export default function MortgageInput({
  message,
  title,
  defaultValue,
  isString = false,
  selection,
  unit = "£",
  children,
}: {
  message: string;
  title: string;
  defaultValue: number | string;
  isString?: boolean;
  selection?: string[];
  unit?: string;
  children?: ReactNode;
}) {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    let run = true;
    if (run && window) {
      const parameter = getQueryParameter(title);
      if (parameter && (isString || selection)) {
        setState(decodeURI(parameter));
      } else if (parameter && !isString) {
        setState(Number(parameter));
      }
      if (!parameter) {
        updateQueryParams(title, `${defaultValue}`);
      }
    }
    return () => {
      run = false;
    };
  }, [title, defaultValue, isString, selection]);

  if (selection) {
    return (
      <>
        <label
          className={`grid gap-2 items-center p-0 
              grid-cols-[1fr_auto] w-full bg-black md:w-[min(100%,50rem)]`}
        >
          {`${message}: `}
          <select
            className="block m-0 bg-black text-white border border-white rounded w-fit p-1 text-center ml-auto hover:invert focus:invert"
            onChange={(e) => {
              const current = `${e.target.value}`;
              setState(current);
              hardUpdateQueryParams(title, current);
            }}
            value={state}
          >
            {selection.map((optionName, number) => {
              const key = `option-${number}`;
              return (
                <option key={key} className="text-white">
                  {optionName}
                </option>
              );
            })}
          </select>
        </label>
        {children}
      </>
    );
  }

  return (
    <>
      <label
        className={`grid gap-2 items-center p-0 ${
          isString
            ? "grid-cols-[1fr_auto] w-full bg-black md:w-[min(100%,50rem)]"
            : "grid-cols-1 w-40"
        }`}
      >
        {`${message}: `}

        {isString ? (
          <input
            className="block m-0 text-white placeholder:text-white bg-transparent border border-current rounded w-full bg-black p-1 text-center ml-auto"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={(e) => updateQueryParams(title, `${e.target.value}`)}
          />
        ) : (
          <div className="flex gap-[2px] m-0 text-black placeholder:text-black bg-white rounded w-40 p-1 text-center">
            {unit === "£" && unit}
            <input
              className="inline w-full bg-white px-[2px]"
              type="number"
              value={state}
              onChange={(e) => setState(Number(e.target.value))}
              onBlur={(e) => hardUpdateQueryParams(title, `${e.target.value}`)}
            />
            {unit !== "£" && unit}
          </div>
        )}
      </label>
      {children}
    </>
  );
}
