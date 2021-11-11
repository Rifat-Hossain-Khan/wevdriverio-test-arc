import fs from "fs";
import path from "path";
import xlsx from "node-xlsx";

exports.getGlobalConfigFromJson = () => {
  const config = require("./global.config.json");
  return config;
};

exports.getGlobalConfigFromTextFile = () => {
  const config = fs.readFileSync(
    path.resolve(__dirname, "./global.config.txt"),
    "utf8"
  );
  return JSON.parse(config);
};

exports.getGlobalConfigFromExcel = () => {
    const parsedData = xlsx.parse(__dirname + "/global.config.xlsx");
    const parsedArray = parsedData[0].data;
    parsedArray.shift();
    const config = {};
  
    for (let element of parsedArray) {
      config[element[0]] = element[1];
    }
    return config;
  };
