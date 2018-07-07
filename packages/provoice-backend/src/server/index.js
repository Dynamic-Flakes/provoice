import app from "./app";


// Read the environement variable to initializate the process

const { PORT = 4003 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
