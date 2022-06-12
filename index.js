import express from "express";
import os from "os";

const app = express();

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  //   res.send("<h1>Hello world!</h1>");
  res.json({ message: "Ok it works...", hostname: os.hostname() });
});

app.listen(PORT, HOST, () => {
  console.log("Listening: ht tp://localhost:5000");
});
