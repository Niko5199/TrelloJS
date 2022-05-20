require("dotenv").config();

if (!process.env.TOKEN && !process.env.KEY) {
  throw new Error("No hay configuración con Api Key y con Token");
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;
const myListId = "6283c400fdbc9c56bf2d797e";

trello.addCard(
  cardTitle,
  "LaunchX Card Description",
  myListId,
  function (error, trelloCard) {
    if (error) {
      console.log("Could not add card:", error);
    } else {
      console.log("Added card:", trelloCard);
    }
  }
);
