import MortgageInput from "./MortgageInput";

export default function MortgageTerm({
  scenarioIndex,
}: {
  scenarioIndex: number;
}) {
  return (
    <div className="grid gap-2 w-[50rem] justify-start">
      <MortgageInput
        message={`Scenario  ${scenarioIndex + 1}`}
        title={`s${scenarioIndex}`}
        defaultValue="Current Mortgage"
        isString
      />
      <div className="flex flex-row flex-wrap gap-2">
        <MortgageInput
          message="Loan Amount (£)"
          title={`p${scenarioIndex}`}
          defaultValue={500000}
        />
        <MortgageInput
          message="Loan Term"
          title={`t${scenarioIndex}`}
          defaultValue={25}
          unit="yrs"
        />{" "}
      </div>
    </div>
  );
}
