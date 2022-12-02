const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  // host: "hostname", - This won't work. U need to properly mention host id & the port num.
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "crud",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Getting the list of tasks from local database:
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * from todos";
  db.query(sqlSelect, (err, result) => {
    //Sending the array of tasks to be displayed
    res.send(result);
  });
});

//Inserting the typed task into the database:
app.post("/api/insert", (req, res) => {
  const taskName = req.body.taskName;
  const description = req.body.description;

  const sqlInsert = "INSERT INTO todos(taskName, description) VALUES(?,?);";
  db.query(sqlInsert, [taskName, description], (err, result) => {
    console.log(result);
  });
});

/*
app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO todos(taskName, description) VALUES('EarlyMorning', 'Brush teeth and go out for running');";
  db.query(sqlInsert, (err, result) => {
    // console.log(result);
    res.send("Hello");
  });
});
*/

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
