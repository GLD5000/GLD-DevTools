"use client";

import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import { useEffect, useState } from "react";

export default function ScenarioOutput({
  type = "principal",
  message,
  scenarioIndex,
  unit = "£",
}: {
  type: string;
  message: string;
  scenarioIndex: number;
  unit?: string;
}) {
  const [state, setState] = useState(0);

  useEffect(() => {
    const functionLookup: { [key: string]: () => number } = {
      principal: () => calculatePrincipal(scenarioIndex),
      deposit: () => calculateDeposit(scenarioIndex),
    };
    let run = true;
    if (run && window) {
      const currentValue = functionLookup[type]();
      setState(currentValue || -Infinity);
    }
    return () => {
      run = false;
    };
  }, [type, scenarioIndex]);
  return state > -Infinity ? (
    <label className="grid gap-2 items-center p-0 grid-cols-1 w-40">
      {`${message}: `}
      <div className="flex gap-[2px] m-0 text-[black] placeholder:text-black bg-[#b0b0b0] rounded w-40 p-1 text-center">
        {unit === "£" && unit}
        <div className="inline w-full bg-transparent px-[2px]">{state}</div>
        {unit !== "£" && unit}
      </div>
    </label>
  ) : (
    <label className="grid gap-2 items-center p-0 grid-cols-1 w-40">
      {`${message}: `}
      <button
        type="button"
        className="flex gap-[2px] m-0 text-[black] placeholder:text-black bg-[#b0b0b0] rounded w-40 p-1 text-center"
        onClick={refreshValue}
      >
        <div className="inline w-full bg-transparent px-[2px]">
          Calculate...
        </div>
      </button>
    </label>
  );
  function refreshValue() {
    const functionLookup: { [key: string]: () => number } = {
      principal: () => calculatePrincipal(scenarioIndex),
      deposit: () => calculateDeposit(scenarioIndex),
    };
    const currentValue = functionLookup[type]();
    setState(currentValue || -Infinity);
  }
}
function calculatePrincipal(scenarioIndex: number) {
  const deposit = Number(getQueryParameter(`d${scenarioIndex}`));
  const extraCapital = Number(getQueryParameter(`ec${scenarioIndex}`));
  const housePrice = Number(getQueryParameter(`hp${scenarioIndex}`));
  const solicitorFees = Number(getQueryParameter(`sf${scenarioIndex}`));
  const newValue = housePrice + solicitorFees - extraCapital - deposit;
  if (newValue) updateQueryParams(`p${scenarioIndex}`, `${newValue}`);
  return newValue;
}
function calculateDeposit(scenarioIndex: number) {
  const salePrice = Number(getQueryParameter(`sp${scenarioIndex}`));
  const agentFees =
    salePrice * (Number(getQueryParameter(`af${scenarioIndex}`)) * 0.01);
  const mortgage = Number(getQueryParameter(`cm${scenarioIndex}`));
  const newValue = salePrice - agentFees - mortgage;
  if (newValue) updateQueryParams(`d${scenarioIndex}`, `${newValue}`);
  return newValue;
}
