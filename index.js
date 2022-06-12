import express from "express";
import os from "os";

const app = express();

app.get("/", (req, res) => {
  //   res.send("<h1>Hello world!</h1>");
  res.json({ message: "Ok it works...", hostname: os.hostname() });
});

app.listen(5000, () => {
  console.log("Listening: http://localhost:5000");
});
