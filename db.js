/**
 * Created by wuxianru on 15/6/4.
 */

var mongoose = require('mongoose'),
    uri = 'mongodb://localhost/mengya',
    conn = exports.mongoConn = mongoose.createConnection(uri);
conn.on('error', console.error.bind(console, 'conn error:'));
