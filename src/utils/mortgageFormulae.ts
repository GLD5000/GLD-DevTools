/* eslint-disable import/prefer-default-export */
export function PMT(rate: number, term: number, principal: number) {
  if (!rate || rate <= 0 || rate >= 1)
    throw new RangeError("Rate must be between 0 and 1 (exclusive)");
  if (!term || term < 1) throw new RangeError("Term must be 1 or more");
  if (!principal || principal <= 0)
    throw new RangeError("Principal must be greater than 0");
  const months = 12;
  const monthlyRate = rate / months;
  const monthlyDecimal = 1 + monthlyRate;
  const termInMonths = -term * months;
  const ratePrincipal = monthlyRate * principal;
  const decimalToTheTerm = 1 - monthlyDecimal ** termInMonths;
  return ratePrincipal / decimalToTheTerm;
}
export function pmtToString(input: number) {
  return input.toFixed(2);
}

// PMT =        P x (r / 12)
//       ________________________
//       1 -          1
//          _____________________
//          (1 + r / 12)^(-12 x t)

// TEST
// PMT £873.68
// p = £201,851.23
// r = 1.59%
// t = 23
