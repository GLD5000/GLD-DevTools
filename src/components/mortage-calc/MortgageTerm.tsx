import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import { useState, useEffect } from "react";
import MortgageInput from "./MortgageInput";
import ScenarioOutput from "./ScenarioOutput";

export default function MortgageTerm({
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

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {currentType === "Loan" ? (
        <MortgageInput
          message="Loan Amount"
          title={`p${scenarioIndex}`}
          defaultValue={500000}
        />
      ) : (
        <ScenarioOutput
          type="principal"
          message="Loan Amount"
          scenarioIndex={scenarioIndex}
        />
      )}
      <MortgageInput
        message="Loan Term"
        title={`t${scenarioIndex}`}
        defaultValue={25}
        unit="yrs"
      />{" "}
    </div>
  );
}
