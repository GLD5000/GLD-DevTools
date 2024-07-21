import { getQueryParameter, updateQueryParams } from "@/utils/urlQueryParams";
import { useState, useEffect } from "react";
import MortgageInput from "./MortgageInput";

export default function BuyingHouse({
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
  if (currentType === "Loan") return null;

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <MortgageInput
        message="Deposit"
        title={`d${scenarioIndex}`}
        defaultValue={200000}
      />
      <MortgageInput
        message="Extra Capital"
        title={`ec${scenarioIndex}`}
        defaultValue={200000}
      />
      <MortgageInput
        message="Solicitor Fees"
        title={`sf${scenarioIndex}`}
        defaultValue={10000}
      />
      <MortgageInput
        message="House Price"
        title={`hp${scenarioIndex}`}
        defaultValue={450000}
      />
    </div>
  );
}
