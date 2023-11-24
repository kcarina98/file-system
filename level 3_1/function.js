import fs from "fs";

export const Test = (text) => {
  fs.writeFileSync("./Unterordner/test", text + "\n", { flag: "a" }, () => {
    console.log("Text wurde hinzugefügt");
  });
};
