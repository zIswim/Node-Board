// 글쓰기
async function writePost(collection, post){
    post.hits = 0;
    post.createdDt = new Date().toLocaleDateString(); // 날자는 ISO 포맷으로 저장
    return await collection.insertOne(post);
}

module.exports = {
    writePost,
}