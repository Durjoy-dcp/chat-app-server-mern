const express = require("express");
const { registration } = require("../controllers/userControllers");
const router = new express.Router();
router.route("/").post(registration);
module.exports = router;
