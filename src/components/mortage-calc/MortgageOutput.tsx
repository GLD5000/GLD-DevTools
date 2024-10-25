"use client";

import { useEffect, useState } from "react";
import { calculatePayment } from "./derivedValues";

export default function MortgageOutput({
  message,
  scenarioIndex,
  mortgageIndex,
}: {
  message: string;
  scenarioIndex: number;
  mortgageIndex: number;
}) {
  const [state, setState] = useState(0);

  useEffect(() => {
    let run = true;
    if (run && window) {
      const currentValue = calculatePayment(scenarioIndex, mortgageIndex);
      setState(currentValue);
    }
    return () => {
      run = false;
    };
  }, [scenarioIndex, mortgageIndex]);
  return state > -Infinity ? (
    <label className="grid gap-2 items-center p-0 grid-cols-1 w-40">
      {`${message}: `}
      <div className="flex gap-[2px] m-0 text-[black] placeholder:text-black bg-[#b0b0b0] rounded w-40 p-1 text-center">
        £
        <div className="inline w-full bg-black bg-transparent px-[2px]">
          {state}
        </div>
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
    const currentValue = calculatePayment(scenarioIndex, mortgageIndex);
    setState(currentValue);
  }
}
