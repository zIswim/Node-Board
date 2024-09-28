const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars',
    handlebars.create({
        helpers: require("./configs/handlebars-helpers"),
    }).engine,
);// 템플릿 엔진으로 핸들바 등록

app.set('view engine', 'handlebars'); // 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set('views', __dirname + '/views'); // 뷰 디렉터리를 views로 설정

// mongodb 연결 함수
const mongodbConnection = require("./configs/mongodb-connection");

// 라우터 설정
app.get("/", (req, res) => {
    res.render("home", {title : "테스트 게시판"});
});

app.get("/write", (req, res) => {
    res.render("write", {title : "테스트 게시판"});
});

app.get("/detail/:id", async(req, res) => {
    res.render("detail", {title : "테스트 게시판"});
});

let collection;
app.listen(3000, async () => {
    console.log("Server started on port 3000");
    const mongoClient = await mongodbConnection();
    collection = mongoClient.db().collection("Post");
    console.log("MongoDB connected")
});