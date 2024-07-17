/* eslint-disable no-loop-func */
import { PMT, pmtToString } from "@/utils/mortgageFormulae";

describe("Mortgage Calculators Work", () => {
  it("PMT worked", () => {
    const expectedPMTResult = "873.68";
    const rate = 1.59 * 0.01; // decimal
    const principal = 201851.23; // pounds
    const term = 23; // years
    const actualResult = PMT(rate, term, principal).toFixed(2);

    expect(actualResult).toBe(expectedPMTResult);
  });

  it("PMT to string worked", () => {
    const expectedPMTResult = "873.68";
    const rate = 1.59 * 0.01; // decimal
    const principal = 201851.23; // pounds
    const term = 23; // years
    const actualResult = pmtToString(PMT(rate, term, principal));

    expect(actualResult).toBe(expectedPMTResult);
  });
});
