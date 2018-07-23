const app = require("./app");

// Read the environement variable to initializate the process
const port = process.env.PORT || 4007;

// Start the server
app.listen(port);
console.log(`Server listening at ${port}`);

// refactored code for easier test and feature scale
