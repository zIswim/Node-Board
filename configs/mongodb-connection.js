const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://wltndud:wltndud@cluster0.legya.mongodb.net/board";

module.exports = function (callback){
    return MongoClient.connect(uri, callback);
};