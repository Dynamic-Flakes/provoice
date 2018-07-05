import express from "express";
import compression from "compression";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";

import routes from "../routes/routes";

// Initialize http server
const app = express();
app.disable("x-powered-by");

// Include static assets and compress the file before sending to client
app
  .use(compression())
  .use(express.static(path.join(__dirname, "../..", "build")));

app.use(
  logger("dev", {
    skip: () => app.get("env") === "test"
  })
);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Read the environement variable to initializate the process
const PORT = process.env.PORT || 4007;

// Routes
app.use("/", routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Routes
app.get("/", (req, res) => {
  res.status(200).send("ok");
});

// start the server
app.listen(PORT);
console.log("Server is Up and Running at Port : ", PORT);

export default app;
