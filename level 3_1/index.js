import fs from "fs";
import { Test } from "./function.js";

fs.mkdir("./Unterordner", { recursive: true }, () => {
  console.log("Unterordner ist da");
  Test("Hier kommt neuer Text rein");
  Test("und noch mehr Text");
  Test("gaaaaanz viel Text");
  Test("ok reicht.");
});
