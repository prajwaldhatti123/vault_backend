const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signin", authController.verifyUser);

module.exports = router;
