import fs from "fs";

fs.writeFileSync("./blog1.txt", "Hello World", () => {
  console.log("Blog 1 ist fertig");
});

//Text ändern
fs.writeFileSync("./blog1.txt", "Ich bin Webdeveloper", () => {
  console.log("Jetzt steht in Blog 1 der neue Text");
});

// Blog 2
fs.writeFile(".blog2.txt", "Hier ist Blog 2", () => {
  console.log("Blog 2 ist fertig");
});

// Assets Ordner erstellen
fs.rmdir("./assets", () => {
  console.log("Assets Ordner wird gelöscht");
  fs.mkdir("./assets", { recursive: true }, () => {
    console.log("Assets Ordner ist erstellt");
  });
});

//delete.txt erstellen
fs.rm("./delete.txt", () => {
  fs.writeFile("./delete.txt", "Hier wird alles gelöscht", () => {
    console.log("Die Delete File ist fertig");
  });
});

// Datei umbenennen
fs.writeFile("./Hello.txt", "Hallo ich werde umbenannt", () => {
  console.log("Hello.txt ist fertig");

  fs.rename("./Hello.txt", "./Umbenannt.txt", () => {
    console.log("Hallo ich wurde umbenannt");
  });
});
