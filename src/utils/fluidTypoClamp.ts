// createFluidValue.ts
/* eslint-disable import/prefer-default-export */
/**
  More info:
  https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
 */
const DEFAULT_MIN_SCREEN = 320;
const DEFAULT_MAX_SCREEN = 1024;

const HTML_FONT_SIZE = 16;

/**
 * It returns a CSS `clamp` function string that will fluidly
 * transition between a `minSize` and `maxSize` based on the screen size provided
 */
export function createFluidValue(
  minSize: number,
  maxSize: number,
  minScreenSize: number = DEFAULT_MIN_SCREEN,
  maxScreenSize: number = DEFAULT_MAX_SCREEN,
) {
  return `clamp(${pxToRem(minSize)}, ${getPreferredValue(
    minSize,
    maxSize,
    minScreenSize,
    maxScreenSize,
  )}, ${pxToRem(maxSize)})`;
}

/**
 * Determines how fluid typography scales
 */
function getPreferredValue(
  minSize: number,
  maxSize: number,
  minScreenSize: number,
  maxScreenSize: number,
) {
  const vwCalc = cleanNumber(
    (100 * (maxSize - minSize)) / (maxScreenSize - minScreenSize),
  );
  const remCalc = cleanNumber(
    (minScreenSize * maxSize - maxScreenSize * minSize) /
      (minScreenSize - maxScreenSize),
  );

  return `${vwCalc}vw + ${pxToRem(remCalc)}`;
}

function pxToRem(px: number | string) {
  return `${cleanNumber(Number(px) / HTML_FONT_SIZE)}rem`;
}

/**
 * It takes a number, adds a very small number to it, multiplies it by 100, rounds
 * it, and then divides it by 100
 * @param num - The number to be rounded.
 */
function cleanNumber(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
