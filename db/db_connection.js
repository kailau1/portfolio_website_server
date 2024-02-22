const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/portfolio_site";
const client = new MongoClient(uri, { 
    serverSelectionTimeoutMS: 15000 // Increased to a 15-second connection timeout
});

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        console.log("Attempting to connect to MongoDB...");

        client.connect(function (err, db) {
            if (err || !db) {
                console.error("Error connecting to MongoDB:", err);
                return callback(err);
            }

            dbConnection = db.db("portfolio_site");
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    }
};

module.exports.connectToServer(function (err) {
    if (err) {
        console.error("Connection error:", err);
        process.exit(1);
    }

    console.log("Connection to MongoDB established");
});
