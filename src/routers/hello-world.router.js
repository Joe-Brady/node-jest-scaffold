const { Router } = require("express");

const helloWorldRouter = Router();

helloWorldRouter.get("/", async (req, res) => {
  const inputNumber = req.query.number;

  const response = {
    message: `Hello world! Input number is ${inputNumber}`
  };

  res.send(response);
});

module.exports = helloWorldRouter;
