// set up MYSQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "2411",
        database: "burgers_db"
    });
}

connection.connect();

//exporting connection for ORM to use
module.exports= connection;