var express = require('express');
var router = express.Router();

//biz
var users=require("../biz/users")

/* GET users listing. */
router.route("/")
    .get(users.list)
    .post(users.create);

router.route("/:id")
    .get(users.detail)
    .put(users.update)
    .delete(users.delete);


module.exports = router;
