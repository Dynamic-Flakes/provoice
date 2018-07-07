const mongoose = require("mongoose");
const config = require("./database");

// Connecting to Database
mongoose.connect(config.database);

// Checking if connection to db was successful
mongoose.connection.on("connected", () => {
  console.log(
    `Mongoose successfully connected to database URL: ${config.database}`
  );
});

mongoose.connection.on("error", error => {
  console.error(`Mongoose connection error occurred. Error: ${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection lost...");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection closed...");
    process.exit(0);
  });
});

export default mongoose;
