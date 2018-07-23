import config from '../config/config';
import app from '../config/express';
import mongoose from '../config/persistence/mongodb/connectdb';

// open mongoose connection
require('../config/persistence/mongodb/connectdb');

// listern to the port
const port = config.get('server.port');
app.listen(port, () => console.info(`server started on port ${port}`));

/**
* Exports express
* @public
*/

export default app;