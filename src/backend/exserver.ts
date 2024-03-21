import express from "express";

const app = express();
const port = 5000;

app.get("/", (_req, res) => {
  res.send("the server has booted");
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
