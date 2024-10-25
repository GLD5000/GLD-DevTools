import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import { useState, useEffect } from "react";
import MortgageInput from "./MortgageInput";
import ScenarioOutput from "./ScenarioOutput";

export default function BuyingHouse({
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
  if (currentType === "Loan") return null;

  return (
    <div className="flex flex-row flex-wrap gap-2 w-full bg-black">
      {currentType === "Buy" ? (
        <MortgageInput
          message="Deposit"
          title={`d${scenarioIndex}`}
          defaultValue={200000}
        />
      ) : (
        <ScenarioOutput
          type="deposit"
          message="Deposit"
          scenarioIndex={scenarioIndex}
        />
      )}

      <MortgageInput
        message="Extra Capital"
        title={`ec${scenarioIndex}`}
        defaultValue={0}
      />
      <MortgageInput
        message="Solicitor Fees"
        title={`sf${scenarioIndex}`}
        defaultValue={2400}
      />
      <ScenarioOutput
        message="Stamp Duty"
        type="stamp"
        scenarioIndex={scenarioIndex}
      />
      <ScenarioOutput
        message="Total Buying Fees"
        type="buy"
        scenarioIndex={scenarioIndex}
      />
      <ScenarioOutput
        message="All Fees"
        type="all"
        scenarioIndex={scenarioIndex}
      />

      <MortgageInput
        message="House Price"
        title={`hp${scenarioIndex}`}
        defaultValue={450000}
      />
    </div>
  );
}
