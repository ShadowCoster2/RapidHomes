const express = require("express");
const app = express();
app.use(express.json());
const port = "8000";
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("hello mayank");
});
app.get("h", (req, res) => {
  res.send("hello");
});
