import { indexToLetter } from "@/utils/urlQueryParams";
import MortgageInput from "./MortgageInput";

export default function MortgageRate({
  scenarioIndex,
  mortgageIndex,
}: {
  scenarioIndex: number;
  mortgageIndex: number;
}) {
  const mortgageLetter = indexToLetter(mortgageIndex);
  const mortgageSuffix = `${scenarioIndex}${mortgageLetter}`;
  return (
    <div className="grid gap-2 w-[50rem] justify-start">
      <MortgageInput
        message={`Mortgage  ${mortgageLetter}`}
        title={`m${mortgageSuffix}`}
        defaultValue={`Mortgage ${mortgageLetter}`}
        isString
      />
      <div className="flex flex-row flex-wrap gap-2">
        <MortgageInput
          message="Interest Rate"
          title={`r${mortgageSuffix}`}
          defaultValue={5}
          unit="%"
        />
        <MortgageInput
          message="Product Fee"
          title={`f${mortgageSuffix}`}
          defaultValue={5}
        />
        <MortgageInput
          message="Fixed Term"
          title={`ft${mortgageSuffix}`}
          defaultValue={5}
          unit="yrs"
        />
      </div>
    </div>
  );
}
