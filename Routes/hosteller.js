const router = require("express").Router();

const { login, add } = require("./../Controllers/hosteller.controller");

router.route("/add").post(add);

router.route("/login").post(login);

module.exports = router;
