const express = require("express");

const port = 8002;
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Product Service" });
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
