const express = require("express");
const config = require("./config");
const helmet = require("helmet");

const rootHandler = require("./endpoints/root");

const app = express();

app.use(helmet());
app.use(express.json(), (error, req, res, next) => {
  console.log("Error Input", req.body);

  if (error) {
    const result = {
      errors: [{ message: `Unable to parse JSON from input: ${error}` }]
    };

    console.log("Error Output", result);

    res.setHeader("Content-Type", "application/json");
    res.status(400);
    res.json(result);
    return;
  }

  next();
});

app.post("/", (req, res) => {
  console.log("Input", req.body);

  // We're always going to return JSON.
  res.setHeader("Content-Type", "application/json");

  const result = rootHandler(req.body);

  if (result.errors) {
    res.status(400);
  }

  console.log("Output", result);

  res.json(result);
});

app.listen(config.port);
