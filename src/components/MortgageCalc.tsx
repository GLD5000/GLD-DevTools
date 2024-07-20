"use client";

// import { useEffect, useState } from "react";
// import Parsers from "@/markdown/parsers/allParsers.mdx";
// import MdxWrapper from "./markdownComponents/MdxWrapper";
import {
  clearQueryParams,
  // getQueryParams,
  // updateQueryParams,
} from "@/utils/urlQueryParams";
// import { PMTAsString } from "@/utils/mortgageFormulae";
import MortgageInput from "./MortgageInput";

// const defaultPrincipal = 200000;
// const defaultTerm = 30;
// const defaultRate = 5;

export default function MortgageCalc() {
  // useEffect(() => {
  //   let run = true;
  //   if (run && window) {
  //     const paramsObject = getQueryParams();
  //   }
  //   return () => {
  //     run = false;
  //   };
  // }, []);

  return (
    <div className="mx-auto max-w-[80rem] w-full grid gap-4">
      <h2>Mortgage Calculator</h2>

      <MortgageInput
        message="Principal Amount £"
        title="principal"
        defaultValue={5}
      />
      <MortgageInput message="Term (years)" title="term" defaultValue={5} />
      <MortgageInput
        message="Interest Rate (% per year)"
        title="rateA"
        defaultValue={5}
      />
      <MortgageInput message="Interest Rate B" title="rateB" defaultValue={5} />
      <br />
      <button type="button" onClick={handleClear}>
        Reset
      </button>
      <p>Monthly Payment: £</p>
    </div>
  );
  // function calculateRates() {
  //   const paramsObject = getQueryParams();
  //   const { term, principal } = paramsObject;
  //   Object.entries(paramsObject).forEach((entry) => {
  //     if (entry[1] && entry[0][0] === "r") {
  //       const monthlyRate = PMTAsString(
  //         Number(entry[1]),
  //         Number(term),
  //         Number(principal)
  //       );
  //       updateQueryParams(`monthly${entry[0].at(-1)}`, `${monthlyRate}`)
  //     }
  //   });
  // }
  function handleClear() {
    clearQueryParams();
  }
}
