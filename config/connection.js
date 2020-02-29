var Sequelize = require("sequelize");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'yourRootPassword',
        database: 'burgers_db'
    });
}

connection.connect();

var sequelize = new Sequelize("burgers_db", "root", "yourRootPassword", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

module.exports = sequelize;
