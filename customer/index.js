const express = require("express");

const port = 8001;
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Customer Service" });
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
