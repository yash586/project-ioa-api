var mysql = require("mysql");
const dbConfig = require("../../configs/db");
var connection = mysql.createPool({
  connectionLimit: 10,
  host: dbConfig.host,
  user: dbConfig.userName,
  password: dbConfig.password,
  database: dbConfig.database,
});

function connectDatabase() {
  console.log("Connected to database!!");
  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    }
  );
}

function endConnection() {
  connection.end();
}

module.exports = {
  connectDatabase,
  endConnection,
  connection,
};
