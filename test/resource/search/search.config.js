import fs from "fs";
import path from "path";
import xlsx from "node-xlsx";

exports.getConfigFromJson = () => {
  const config = require("./search.config.json");
  return config;
};

exports.getConfigFromTextFile = () => {
  const config = fs.readFileSync(
    path.resolve(__dirname, "./search.config.txt"),
    "utf8"
  );
  return JSON.parse(config);
};

exports.getConfigFromExcel = () => {
  const parsedData = xlsx.parse(__dirname + "/search.config.xlsx");
  const parsedArray = parsedData[0].data;
  parsedArray.shift();
  const config = {};

  for (let element of parsedArray) {
    config[element[0]] = element[1];
  }
  return config;
};
