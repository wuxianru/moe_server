/**
 * Created by wuxianru on 15/6/8.
 */
var mongoose = require("mongoose"),
    db = require("../db"),
    Schema = mongoose.Schema;

/**
 * 学校模型
 */
var PhotoSchema = new Schema({
    date:Date,
    location:String,
    url: String,
    creator:{type:Schema.Types.ObjectId, ref: "User",index:true}
});