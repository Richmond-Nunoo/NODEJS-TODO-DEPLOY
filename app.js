const http = require('http');
const server = http.createServer(function(req, res){
    console.log(req.url);
    if(req.method==='POST' && req.url === '/ride-order'){
        res.end('You just made a POST to add a statement')
    }else if(req.method === 'GET' &&req.url === '/ride-order' ){
        res.end('You just made a GET to add a statement')
    }else if(req.method=== 'PUT'&&req.url === '/ride-order'){
        res.end('You just made a PUT to add a statement')
    }else if(req.method==='DELETE'&&req.url === '/ride-order'){
        res.end('You just made a DELETE to add a statement')
    }else {
        res.end('This endpoint does not exist')
    }
});
server.listen(4000,function(){
    console.log('Server has started to run');
});