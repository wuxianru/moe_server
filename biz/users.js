/**
 * Created by wuxianru on 15/6/5.
 */
var usersModel= require("../models/user").User;
var apiG= require("../services/apiGenerator");


exports.list=apiG.list(usersModel);
exports.detail=apiG.detail(usersModel);
exports.create=apiG.create(usersModel);
exports.delete=apiG.create(usersModel);
exports.update=apiG.create(usersModel);