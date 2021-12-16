const createServer = require('./server');
const { Pool } = require("pg");

const db = new Pool({
  database: "workshop-demo",
});

const app = createServer(db);

app.listen(4000);
