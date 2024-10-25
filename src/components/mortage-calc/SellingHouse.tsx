import { useEffect, useState } from "react";
import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import MortgageInput from "./MortgageInput";
import ScenarioOutput from "./ScenarioOutput";

export default function SellingHouse({
  scenarioIndex,
}: {
  scenarioIndex: number;
}) {
  const [currentType, SetCurrentType] = useState("Loan");
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
    <div className="flex flex-row flex-wrap gap-2 w-full bg-black">
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
        message="Agent Rate"
        title={`af${scenarioIndex}`}
        defaultValue={1}
        unit="%"
      />
      <ScenarioOutput
        type="agent"
        message="Agent Fees"
        scenarioIndex={scenarioIndex}
      />
      <MortgageInput
        message="Solicitor Fees"
        title={`cf${scenarioIndex}`}
        defaultValue={1600}
      />
      <ScenarioOutput
        type="sell"
        message="Total Selling Fees"
        scenarioIndex={scenarioIndex}
      />
    </div>
  );
}
