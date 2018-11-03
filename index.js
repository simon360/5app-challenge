const express = require("express");
const config = require("./config");

const rootHandler = require("./endpoints/root");

const app = express();

app.use(express.json(), (error, req, res, next) => {
  if (error) {
    const result = {
      errors: [{ message: `Unable to parse JSON from input: ${error}` }]
    };

    res.setHeader("Content-Type", "application/json");
    res.status(400);
    res.json(result);
    return;
  }

  next();
});

app.post("/", (req, res) => {
  // We're always going to return JSON.
  res.setHeader("Content-Type", "application/json");

  const result = rootHandler(req.body);

  if (result.errors) {
    res.status(400);
  }

  res.json(result);
});

app.listen(config.port);
