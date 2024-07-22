import { useEffect, useState } from "react";
import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import MortgageInput from "./MortgageInput";

export default function SellingHouse({
  scenarioIndex,
}: {
  scenarioIndex: number;
}) {
  const [currentType, SetCurrentType] = useState("");
  useEffect(() => {
    let run = true;
    if (run && window) {
      const parameter = getQueryParameter(`st${scenarioIndex}`);
      if (parameter) {
        SetCurrentType(parameter);
      }
      if (!parameter) {
        updateQueryParams(`st${scenarioIndex}`, "Loan");
      }
    }
    return () => {
      run = false;
    };
  }, [scenarioIndex]);
  if (currentType !== "Sell") return null;

  return (
    <div className="flex flex-row flex-wrap gap-2 w-full">
      <MortgageInput
        message="Current Mortgage"
        title={`cm${scenarioIndex}`}
        defaultValue={201851}
      />
      <MortgageInput
        message="Sale Price"
        title={`sp${scenarioIndex}`}
        defaultValue={410000}
      />
      <MortgageInput
        message="Agent Fees"
        title={`af${scenarioIndex}`}
        defaultValue={1}
        unit="%"
      />
      <MortgageInput
        message="Conveyance Fees"
        title={`cf${scenarioIndex}`}
        defaultValue={1600}
      />
    </div>
  );
}
