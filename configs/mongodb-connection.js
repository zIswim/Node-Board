const {mongoClient} = require('mongodb');

const url = "mongodb+srv://<아이디>:<패스워드>@<클러스터정보>/board";

module.exports = function (callback){
    return MongoClient.connect(url, callback);
};