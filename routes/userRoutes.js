const express = require("express");
const router = new express.Router();
router.route("/").post(registration);
module.exports = router;
