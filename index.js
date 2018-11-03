const express = require("express");
const config = require("./config");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();

app.use(helmet());
app.use(express.json());

app.post("/", (req, res) => {
  // We're always going to return JSON.
  res.setHeader("Content-Type", "application/json");

  // TODO: hook into correct functions
  res.json({
    response: [
      {
        name: "Molly",
        count: 12,
        thumbnail: "https://example.com/64x64.png"
      },
      {
        name: "Polly",
        count: 4,
        thumbnail: "https://example.com/64x64.png"
      }
    ]
  });
});

app.listen(config.port);
