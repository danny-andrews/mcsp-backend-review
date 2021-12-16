const express = require("express");

function createServer(db) {
  const app = express();

  app.use(express.static("public"));

  app.get("/api/test", (req, res) => {
    db.query("SELECT * FROM test").then((result) => {
      res.json(result.rows);
    });
  });

  return app;
}


module.exports = createServer;
