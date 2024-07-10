module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // This will format and lint TS & JS Files
  "**/*.(ts|tsx|js)": (filenames) => [
    `npx prettier --write ${filenames.join(" ")}`,
    `npx eslint --fix ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `npx prettier --write ${filenames.join(" ")}`,
};
