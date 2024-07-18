"use client";

import { useEffect, useState } from "react";
// import Parsers from "@/markdown/parsers/allParsers.mdx";
// import MdxWrapper from "./markdownComponents/MdxWrapper";
import { getQueryParams, updateQueryParams } from "@/utils/urlQueryParams";

export default function MortgageCalc() {
  const [principal, setPrincipal] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    let run = true;
    if (run && window) {
      const paramsObject = getQueryParams();
      if (paramsObject.principal) {
        setPrincipal(Number(paramsObject.principal));
      }
      if (paramsObject.term) {
        setTerm(Number(paramsObject.term));
      }
      if (paramsObject.rate) {
        setRate(Number(paramsObject.rate));
      }
    }
    return () => {
      run = false;
    };
  }, []);

  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <label>
        Principal Amount:
        <input
          className="text-black placeholder:text-black bg-[#f0f0f0]"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          onBlur={(e) => updateQueryParams("principal", `${e.target.value}`)}
        />
      </label>
      <br />
      <label>
        Term (years):
        <input
          className="text-black placeholder:text-black bg-[#f0f0f0]"
          type="number"
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
          onBlur={(e) => updateQueryParams("term", `${e.target.value}`)}
        />
      </label>
      <br />
      <label>
        Interest Rate (% per year):
        <input
          className="text-black placeholder:text-black bg-[#f0f0f0]"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          onBlur={(e) => updateQueryParams("rate", `${e.target.value}`)}
        />
      </label>
      <br />
      {/* <button onClick={calculatePayment}>Calculate Payment</button>
      <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p> */}
    </div>
  );
}
