import { assert } from "console";
import data from "./data.json" assert { type: "json" }; //- danke an yan, hab bei ihm das mit dem type geklaut :-)
import fs from "fs";
import { type } from "os";

data.forEach((element) => {
  fs.writeFile(
    "./Daten.txt",
    `${element.id} - ${element.title} \n ${element.description} \n \n`,
    { flag: "a" },
    () => {
      console.log("Die Daten sind jetzt da :-)");
    }
  );
});
