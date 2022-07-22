const fs = require("fs");

const distFolder = "dist";

function getNgswConfig(locale) {
  const swConfig = fs.readFileSync(`${distFolder}/${locale}/ngsw.json`);
  return JSON.parse(swConfig);
}

const locales = fs
  .readdirSync(distFolder)
  .filter((locale) => fs.lstatSync(`${distFolder}/${locale}`).isDirectory());

// Merge the ngsw.json files
const firstLocale = locales.pop();
const combined = getNgswConfig(firstLocale);
locales.forEach((locale) => {
  const additional = getNgswConfig(locale);

  // Merge data and asset groups
  const toBeMergedGroups = [
    { groupType: "dataGroups", property: "patterns" },
    { groupType: "assetGroups", property: "urls" },
  ];
  toBeMergedGroups.forEach(({ groupType, property }) => {
    additional[groupType].forEach((group) => {
      combined[groupType]
        .find((g) => g.name === group.name)
        [property].push(...group[property]);
    });
  });

  // combine hash tables
  Object.assign(combined.hashTable, additional.hashTable);
  fs.unlinkSync(`${distFolder}/${locale}/ngsw.json`);
  fs.unlinkSync(`${distFolder}/${locale}/ngsw-worker.js`);
  fs.renameSync(
    `${distFolder}/${locale}/safety-worker.js`,
    `${distFolder}/${locale}/ngsw-worker.js`
  );
});

combined.index = "/index.html";
// add root index.html to correctly cache direct app entry (e.g. without en-US)
combined["assetGroups"][0]["urls"].push("/index.html");

fs.writeFileSync(`${distFolder}/ngsw.json`, JSON.stringify(combined));
fs.unlinkSync(`${distFolder}/${firstLocale}/ngsw.json`);

// Adjust service worker to allow changing language offline
const swFile = fs
  .readFileSync(`${distFolder}/${firstLocale}/ngsw-worker.js`)
  .toString();
const patchedSw = swFile.replace(
  "return this.handleFetch(this.adapter.newRequest(this.indexUrl), context);",
  `const locale = this.adapter.normalizeUrl(req.url).split("/")[1];
                    const url = locale ? "/" + locale + "/index.html": "/index.html";
                    return this.handleFetch(this.adapter.newRequest(url), context);`
);
fs.writeFileSync(`${distFolder}/ngsw-worker.js`, patchedSw);
fs.unlinkSync(`${distFolder}/${firstLocale}/ngsw-worker.js`);
fs.renameSync(
  `${distFolder}/${firstLocale}/safety-worker.js`,
  `${distFolder}/${firstLocale}/ngsw-worker.js`
);