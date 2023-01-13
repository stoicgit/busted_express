const express = require("express");
const app = express();
const PORT = 3033;
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.listen(PORT, console.log(`Listening on port $[{PORT}]`));

const rootController = require("./routes/index");
const rangersController = require("./routes/rangers");

app.use("/", rootController);
app.use("/rangers", rangersController);
