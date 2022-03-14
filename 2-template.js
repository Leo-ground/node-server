const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'leo';
const courses = [
    {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name:'node'}
]
const server = http.createServer((req, res) => {
const url = req.url;
    res.setHeader('Content-type', 'text/html');
    if(url === '/') {
        ejs
            .renderFile('./template/index.ejs', {name})
            .then(data => res.end(data)); //{name:name} 키와 벨류 이름이 같으면 한번만 사용가능
      
    } else if(url ==='/courses') {
        ejs
        .renderFile('./template/courses.ejs', {courses})
        .then(data => res.end(data));
      
    } else {
        ejs
            .renderFile('./template/not-found.ejs', {name})
            .then(data => res.end(data));
       
    }
    
});

server.listen(8080); //서버에 해당하는 포트번호 설정 