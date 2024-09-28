const {mongoClient} = require('mongodb');

const url = "mongodb+srv://wltndud:wltndud@cluster0/board";

module.exports = function (callback){
    return MongoClient.connect(url, callback);
};