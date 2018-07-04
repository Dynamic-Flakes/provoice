import express from 'express';
import exphbs from 'express-handlebars';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';

// Initialize http server
const app = express();

// Include static assets and compress the file before sending to client
app.use(compression())
.use(express.static(path.join(__dirname, '../..', 'build')));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create redux store
const store = createStore(rootReducers);

// Read the environement variable to initializate the process
const PORT = process.env.PORT || 4003;


// Routes
app.get('/', (req, res) => {
  res.send("welcome");
});

// start the server
app.listen(PORT);
console.log('Server is Up and Running at Port : ', PORT);
