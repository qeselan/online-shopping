const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:8001"));
app.use("/shopping", proxy("http://localhost:8003"));
app.use("/", proxy("http://localhost:8002"));

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
