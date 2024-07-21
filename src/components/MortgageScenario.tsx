import MortgageRate from "./MortgageRate";
import MortgageTerm from "./MortgageTerm";

export default function MortgageScenario({
  scenarioIndex,
}: {
  scenarioIndex: number;
}) {
  return (
    <div className="mx-auto max-w-[80rem] w-full grid gap-4">
      <MortgageTerm scenarioIndex={scenarioIndex} />
      <MortgageRate scenarioIndex={0} mortgageIndex={0} />
    </div>
  );
}
