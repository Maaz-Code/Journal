const express = require("express");
const {userRegister} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(userRegister);
module.exports = router;