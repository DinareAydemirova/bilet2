const express = require("express");
const app = express();
const port = 3000;
require("./src/config/db")
const routes=require("./src/routes/productRouter");
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use("/", routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
