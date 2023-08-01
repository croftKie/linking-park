const express = require("express");
const homeControllers = require("./controllers/homeControllers");
const layouts = require("express-ejs-layouts");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 8800);
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", homeControllers.getHome);

app.get("/links", homeControllers.getLinksView);

app.get("/game", homeControllers.getGameView);

app.get("/name/:myName", homeControllers.getUsersName);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
