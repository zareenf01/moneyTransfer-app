const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./accounts");

router.use("/user", userRouter);

router.use("/accounts", accountRouter);

module.exports = router;
