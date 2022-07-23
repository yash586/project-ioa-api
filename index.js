const express = require("express");
const { connectDatabase, endConnection } = require("./db/models/connection");
const cors = require("cors");
const Joi = require("joi");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
require("./routes/customer")(app);
require("./routes/transaction")(app);
require("./routes/employee")(app);
require("./routes/user")(app);

app.listen(port, () => {
  console.log(`
  Example app listening at http://localhost:${port}`);
});

connectDatabase();
