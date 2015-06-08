var mongoose = require("mongoose"),
    db = require("../db"),
    Schema = mongoose.Schema;
/**
 * 学校模型
 */
var SchoolSchema = new Schema({
    name:{type:String, required:true}
});

/**
 * 班级模型
 * @type {Schema}
 */
var ClassSchema = new Schema({
    name:{type:String,required:true},
    teacher:[{type: Schema.Types.ObjectId, ref: "User",index:true}],
    kids:[{type:Schema.Types.ObjectId ,ref:"User", index:true}]
});

/**
 * 用户模型
 * @type {Schema}
 */
var UserSchema = new Schema({
    name: {type: String, required: true},//名称
    password: String,//密码
    createDate: {type: Date, default: Date.now},//创建日期
    email: String,//邮箱
    mobileNo:String,//手机
    weixinId:String,//微信
    role: {type: String, require: true},//角色: 1老师；2家长；3孩子
    relations:[{type: {
        relation:String,//关系: 1父；2母；3爷；4奶；5公；6婆；7自定义
        relationName:String,//关系名:
        kid:{type: Schema.Types.ObjectId,ref:"User", index:true}
    }}],
    classes:[{type:Schema.Types.ObjectId,ref:"Class", index:true}]//老师管理的班级
});

exports.School = db.mongoConn.model("School", UserSchema, "School");
exports.Class = db.mongoConn.model("Class", ClassSchema, "Class");
exports.User = db.mongoConn.model("User", UserSchema, "User");