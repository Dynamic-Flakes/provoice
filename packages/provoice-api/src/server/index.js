import express from "express";
import compression from "compression";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import routes from "../routes/routes";

import cardealers from "../routes/cardealersinfo.routes";
import carmakes from '../routes/carmake.routes';
import carmodels from "..routes/carmodel.routes";
import cars from "../routes/car.routes";


// Initialize http server
const app = express();
app.disable("x-powered-by");

// Read the environement variable to initializate the process
const PORT = process.env.PORT || 4009;

// db connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/car-api",
  {
    useMongoClient: true
  }
);

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

// Routes
app.use("/", routes);
app.use("/cardealers", cardealers);
app.use("/carmakes", carmakes);
app.use("/carmodels", carmodels);
app.use("/cars", cars);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Index Route
app.get("/", (req, res) => {
  res.status(200).send("ok");
});

// start the server
app.listen(PORT);
console.log("Server is Up and Running at Port : ", PORT);

export default app;
