const router = require("express").Router();
const path = require("path");
const { all, add } = require(path.join(
  __dirname,
  "./../Controllers/complaint.controller.js"
));

router.route("/").get(all);

router.route("/add").post(add);

module.exports = router;
