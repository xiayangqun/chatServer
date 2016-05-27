//index.js

var ws=require('ws')

var webSocketServer=ws.createServer({
    host:"127.0.0.1",
    port:3000
});


webSocketServer.on("connection",function(connectHandle) {
    
    connectHandle.on("message",function(data) {
        console.log("we get data from client: " + data);
        connectHandle.send(data+"from server!!");
    })

    connectHandle.on("close",function(connectHandle){

    })
})