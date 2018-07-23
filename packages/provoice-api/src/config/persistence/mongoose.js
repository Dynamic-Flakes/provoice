import mongoose from "mongoose";
import chalk from "chalk";

const config = require("./database");

// Connecting to Database
mongoose.connect(config.database);

// Checking if connection to db was successful
mongoose.connection.on("connected", () => {
  console.log(
    chalk.greenBright(
      `Mongoose successfully connected to database URL: ${config.database}`
    )
  );
});

mongoose.connection.on("error", error => {
  console.error(
    chalk.redBright(`Mongoose connection error occurred. Error: ${error}`)
  );
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.greenBright("Mongoose connection lost..."));
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(chalk.redBright(`Mongoose disconnected through ${msg}`));
    callback();
  });
};
// For nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
// For app termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app termination", () => {
    process.exit(0);
  });
});

export default mongoose;
