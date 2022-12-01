//Debugging the error file. Copy-pasted from index.js

//See how the row data was tried to pull rom localhost db into the console
//And then console.logging that error lead to the solution at the end.

/*
// const { query } = require("express");
const express = require("express");
// const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "crud",
});

// app.use(cors);
// app.use(express.json());

// db.connect();

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO todos(taskName, description) VALUES('EarlyMorning', 'Brush teeth and go out for running');";

  const sql2 = "SELECT * from todos;";

  db.query(sql2, (err, result) => {
    console.log(result);
    res.send("Hello");
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
*/
