const http = require('http');
//const http2 = require('http2'); //https

//console.log(http.STATUS_CODES);
//console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers); //해당 포트번호로 접속하면 요청한 클라이언트 정보가 req에 입력되어옴
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.write('Welcome!!'); //서버에서 response
    res.end();
});

server.listen(8080); //서버에 해당하는 포트번호 설정 