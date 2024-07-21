"use client";

import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import { useEffect, useState } from "react";

export default function ScenarioOutput({
  type = "principal",
  message,
  scenarioIndex,
  mortgageIndex,
  unit = "£",
}: {
  type: string;
  message: string;
  scenarioIndex: number;
  unit?: string;
  mortgageIndex?: number;
}) {
  const [state, setState] = useState(0);

  console.log("mortgageIndex:", mortgageIndex);
  useEffect(() => {
    const functionLookup: { [key: string]: () => number } = {
      principal: () => calculatePrincipal(scenarioIndex),
    };
    let run = true;
    if (run && window) {
      const currentValue = functionLookup[type]();
      setState(currentValue);
    }
    return () => {
      run = false;
    };
  }, [type, scenarioIndex]);

  return (
    <>
      <label className="grid gap-2 items-center p-0 grid-cols-1 w-40">
        {`${message}: `}
        <div className="flex gap-[2px] m-0 text-[black] placeholder:text-black bg-[#b0b0b0] rounded w-40 p-1 text-center">
          {unit === "£" && unit}
          <div className="inline w-full bg-transparent px-[2px]">{state}</div>
          {unit !== "£" && unit}
        </div>
      </label>
    </>
  );
}
function calculatePrincipal(scenarioIndex: number) {
  const deposit = Number(getQueryParameter(`d${scenarioIndex}`));
  const extraCapital = Number(getQueryParameter(`ec${scenarioIndex}`));
  const housePrice = Number(getQueryParameter(`hp${scenarioIndex}`));
  const solicitorFees = Number(getQueryParameter(`sf${scenarioIndex}`));
  const newValue = housePrice + solicitorFees - extraCapital - deposit;
  updateQueryParams(`p${scenarioIndex}`, `${newValue}`);
  return newValue;
}
