import fs from "fs";

const jsonBuffer = fs.readFileSync("json.json");
const parsedJSON = JSON.parse(jsonBuffer.toString());
parsedJSON.name = "Trevor Leeman";
parsedJSON.age = 26;
const stringifiedJSON = JSON.stringify(parsedJSON);
fs.writeFileSync("json.json", stringifiedJSON);
