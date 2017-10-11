const mongoose = require('mongoose');
const connectionString = "mongodb://admin:admin@ds113915.mlab.com:13915/tests";

//const database = mongoose.createConnection(connectionString);

const db = mongoose.connect(connectionString);

module.exports = db.connection;