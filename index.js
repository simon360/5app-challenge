const express = require("express");
const config = require("./config");
const helmet = require("helmet");

const rootHandler = require("./endpoints/root");

const app = express();

app.use(helmet());
app.use(express.json(), (error, req, res, next) => {
  if (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400);
    res.json({
      errors: [{ message: `Unable to parse JSON from input: ${error}` }]
    });
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
