// set up MYSQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "2411",
    database: "burgers_db"
});

// Making Connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
        console.log("connected as id" + connection.threadId);
});

//exporting connection for ORM to use
module.exports= connection;