const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log("request made",req.method,req.url)

    res.setHeader('Content-Type', 'text/html');


    const filePath = path.join(__dirname, 'index.html');

    pathSvFile = './views/';
    switch (req.url){
        case '/index':
            pathSvFile += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            pathSvFile += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/contact':
            pathSvFile += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            pathSvFile += '404.html';
            res.statusCode = 404;
            break;
    }

    console.log(pathSvFile);

    fs.readFile(pathSvFile, (err, data) => {
        if (err) {
            console.log(err);
            res.end('404 Not Found');
        } else {
            console.log("Data sent");
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000');
});