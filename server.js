const express = require("express");
const { Pool } = require("pg");

const db = new Pool({
  database: "workshop-demo",
});

const app = express();

app.use(express.static("public"));

app.get("/api/test", (req, res) => {
  db.query("SELECT * FROM test").then((result) => {
    res.json(result.rows);
  });
});

app.listen(4000);
