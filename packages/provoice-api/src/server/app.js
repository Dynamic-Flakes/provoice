import express from "express";
import logger from "morgan";
import methodOverride from "method-override";
import compress from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// import strategies from "../config/passport";
import routes from "../routes/routes";
import cardealers from "../routes/carDealerInfo.route";
import error from "../middlewares/error";

// import carmakes from '../routes/carmake.routes';
// import carmodels from "..routes/carmodel.routes";
// import cars from "../routes/car.routes";

// Initialize http server
const app = express();
app.disable("x-powered-by");

// db connection
require("../config/persistence/mongoose");

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
// app.use(passport.initialize());
// passport.use("jwt", strategies.jwt);

// Mount public routes
app.use("/public", express.static(`${__dirname}/public`));

// mount api v1 routes
app.use("/", routes);
app.use("/cardealers", cardealers);
// app.use("/carmakes", carmakes);
// app.use("/carmodels", carmodels);
// app.use("/cars", cars);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

app.use(
  logger("dev", {
    skip: () => app.get("env") === "test"
  })
);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

export default app;
