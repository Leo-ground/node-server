const http = require('http');
const fs = require('fs');
//const http2 = require('http2'); //https

//console.log(http.STATUS_CODES);
//console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers); //해당 포트번호로 접속하면 요청한 클라이언트 정보가 req에 입력되어옴
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-type', 'text/html');
    if(url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
        
        // res.write('<html>');
        // res.write('<head><title>Academy</title></head>');
        // res.write('<body><h1>Welcome!!!</h1></body>');
        // res.write('</html>');
        // res.write('Welcome!!'); //서버에서 response
    } else if(url ==='/courses') {
        fs.createReadStream('./html/courses.html').pipe(res);
        // res.write('<html>');
        // res.write('<head><title>Hello</title></head>');
        // res.write('<body><h1>Courses!!!</h1></body>');
        // res.write('</html>');
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
        // res.write('<html>');
        // res.write('<head><title>Academy</title></head>');
        // res.write('<body><h1>Not Found!!!</h1></body>');
        // res.write('</html>');
    }
    
    //res.end(); pipe는 비동기 함수이므로 end가 먼저 실행되어지면 stream내용이 보여지지 않는다
});

server.listen(8080); //서버에 해당하는 포트번호 설정 