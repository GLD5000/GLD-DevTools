"use client";

import { useEffect, useState } from "react";
import {
  calculateAgentFees,
  calculateAllFees,
  calculateBuyingFees,
  calculateDeposit,
  calculateLTV,
  calculatePrincipal,
  calculateSellingFees,
  calculateStampDuty,
} from "./derivedValues";

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
      stamp: () => calculateStampDuty(scenarioIndex),
      ltv: () => calculateLTV(scenarioIndex),
      agent: () => calculateAgentFees(scenarioIndex),
      sell: () => calculateSellingFees(scenarioIndex),
      buy: () => calculateBuyingFees(scenarioIndex),
      all: () => calculateAllFees(scenarioIndex),
    };
    let run = true;
    if (run && window && type) {
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
        <div className="inline w-full bg-black bg-transparent px-[2px]">
          {state}
        </div>
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
        <div className="inline w-full bg-black bg-transparent px-[2px]">
          Calculate...
        </div>
      </button>
    </label>
  );
  function refreshValue() {
    const functionLookup: { [key: string]: () => number } = {
      principal: () => calculatePrincipal(scenarioIndex),
      deposit: () => calculateDeposit(scenarioIndex),
      stamp: () => calculateStampDuty(scenarioIndex),
      ltv: () => calculateLTV(scenarioIndex),
      agent: () => calculateAgentFees(scenarioIndex),
      sell: () => calculateSellingFees(scenarioIndex),
      buy: () => calculateBuyingFees(scenarioIndex),
      all: () => calculateAllFees(scenarioIndex),
    };
    const currentValue = functionLookup[type]();
    setState(currentValue || -Infinity);
  }
}
