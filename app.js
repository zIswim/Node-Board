const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const postService = require("./services/post-service");

app.engine('handlebars',
    handlebars.create({
        helpers: require("./configs/handlebars-helpers"),
    }).engine,
);// 템플릿 엔진으로 핸들바 등록

app.set('view engine', 'handlebars'); // 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set('views', __dirname + '/views'); // 뷰 디렉터리를 views로 설정

// req.body와 POST 요청을 해석하기 위한 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongodb 연결 함수
const mongodbConnection = require("./configs/mongodb-connection");

// 라우터 설정
app.get("/", (req, res) => {
    res.render("home", {title : "테스트 게시판"});
});

// 쓰기 페이지 이동
app.get("/write", (req, res) => {
    res.render("write", {title : "테스트 게시판"});
});

// 글쓰기
app.post("/write", async(req, res) => {
    const post = req.body;
    const result = await postService.writePost(collection, post);
    res.redirect(`/detail/${result.insertedId}`);
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

