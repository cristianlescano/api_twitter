import express from "express";
import tweets from "./src/api/getData.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send(tweets);
});

app.use("/site", express.static("src/static"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
