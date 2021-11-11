import fs from "fs";
import path from "path";

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
