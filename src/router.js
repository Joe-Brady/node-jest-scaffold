const { Router } = require("express");
const { helloWorldRouter } = require("./routers");

const router = Router();

router.use("/", helloWorldRouter);

module.exports = router;
