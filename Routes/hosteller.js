const router = require("express").Router();
const path = require("path");
const { allStudents, login, add } = require(path.join(
  __dirname,
  "./../Controllers/hosteller.controller"
));

router.route("/").get(allStudents);

router.route("/add").post(add);

router.route("/login").post(login);

module.exports = router;
