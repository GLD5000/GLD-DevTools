import BuyingHouse from "./BuyingHouse";
import MortgageInput from "./MortgageInput";
import MortgageRate from "./MortgageRate";
import MortgageLoan from "./MortgageLoan";
import SellingHouse from "./SellingHouse";

export default function MortgageScenario({
  scenarioIndex,
}: {
  scenarioIndex: number;
}) {
  return (
    <div className="mx-auto max-w-[80rem] w-full grid gap-4">
      <div className="grid gap-2 max-w-[50rem] w-full justify-start">
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
