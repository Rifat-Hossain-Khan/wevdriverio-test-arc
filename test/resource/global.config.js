import fs from "fs";
import path from "path";

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
