import { indexToLetter } from "@/utils/urlQueryParams";
import MortgageInput from "./MortgageInput";

export default function Mortgage({
  scenarioIndex,
  mortgageIndex,
}: {
  scenarioIndex: number;
  mortgageIndex: number;
}) {
  const mortgageLetter = indexToLetter(mortgageIndex);
  const mortgageSuffix = `${scenarioIndex}${mortgageLetter}`;
  return (
    <div className="grid gap-2 w-[50rem] justify-center">
      <MortgageInput
        message={`Mortgage  ${mortgageLetter}`}
        title={`Mor${mortgageSuffix}`}
        defaultValue={`Mortgage ${mortgageLetter}`}
        isString
      />
      <div className="flex flex-row flex-wrap gap-2">
        <MortgageInput
          message="Interest Rate (%)"
          title={`Rate${mortgageSuffix}`}
          defaultValue={5}
        />
        <MortgageInput
          message="Fee (£)"
          title={`Rate${mortgageSuffix}`}
          defaultValue={5}
        />
        <MortgageInput
          message="Fixed Term (Years)"
          title={`Rate${mortgageSuffix}`}
          defaultValue={5}
        />
      </div>
    </div>
  );
}
