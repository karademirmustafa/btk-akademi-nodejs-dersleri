const express = require("express");
const router = express.Router();

const {login} = require("../controllers/auth");
router.route('/sign-in').post(login)

module.exports = router;
