//index.js

var ws=require('ws')

var webSocketServer=ws.createServer({
    host:"127.0.0.1",
    port:3000
});


webSocketServer.on("connection",function(connectHandle) {
    
    connectHandle.on("message",function(data) {

        var clientData=JSON.parse(data);
        var commend=clientData.commend;
        webSocketServer.emit(commend ,  commend,  clientData,  connectHandle,  webSocketServer.clients )

    })

    connectHandle.on("close",function(connectHandle){
        //donothing!!
    })
})

webSocketServer.on("chat", require("./onChat"));

