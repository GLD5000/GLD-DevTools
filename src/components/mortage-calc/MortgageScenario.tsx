import BuyingHouse from "./BuyingHouse";
import MortgageInput from "./MortgageInput";
import MortgageRate from "./MortgageRate";
import MortgageLoan from "./MortgageLoan";
import SellingHouse from "./SellingHouse";
// import { useState } from "react";

export default function MortgageScenario({
  scenarioIndex,
}: {
  scenarioIndex: number;
}) {
  // const [mortgageRates, setMortgageRates] = useState(1);
  // useEffect check for rates and add to mortgage rate array
  return (
    <div className="mx-auto max-w-[80rem] w-full bg-black grid gap-4">
      <div className="grid gap-2 max-w-[50rem] w-full bg-black justify-start">
        <MortgageInput
          message={`Scenario  ${scenarioIndex + 1}`}
          title={`s${scenarioIndex}`}
          defaultValue="Current Mortgage"
          isString
        />
        <MortgageInput
          message={`Calculator Type  ${scenarioIndex + 1}`}
          title={`st${scenarioIndex}`}
          defaultValue="Loan"
          selection={["Loan", "Buy", "Sell"]}
        />
        <SellingHouse scenarioIndex={scenarioIndex} />
        <BuyingHouse scenarioIndex={scenarioIndex} />
        <MortgageLoan scenarioIndex={scenarioIndex} />
        <MortgageRate scenarioIndex={0} mortgageIndex={0} />
      </div>
    </div>
  );
}
