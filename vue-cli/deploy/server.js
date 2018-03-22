http = require('http');
fs = require('fs');
url = require('url');

server = http.createServer((req, res)=>{
    const {pathname} = url.parse(req.url, true);
    if (pathname == '/') {
        fs.readFile('index.html', (err, data)=>{
            if (err) {
                res.write('not found');
                res.end();            
            } else {
                res.write(data);
                res.end();
            }
        })
    } else {
        fs.readFile('./' + pathname, (err, data)=>{
            if (err) {
                console.log(`not found static file: ${pathname}`)
                res.write('not found');
                res.end();            
            } else {
                res.write(data);
                res.end();
            }
        })
    }
    
});

server.listen(8002);