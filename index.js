//index.js

var ws=require('ws')

var webSocketServer=ws.createServer({
    host:"127.0.0.1",
    port:3000
});


webSocketServer.on("connection",function(connectHandle) {
    
    connectHandle.on("message",function(data) {
        
        //console.log('we get data from client: ' + data);

        var commend="chat";
        var clientData=JSON.parse(data);
        var serverData={
            time: Date.parse(new Date())/1000 ,
            world:  'we recvied data :'+clientData.world,
        };
        var responseData={
            clientData:clientData,
            serverData:serverData,
            commend:commend
        };
        connectHandle.send(JSON.stringify(responseData)) ;
    })

    connectHandle.on("close",function(connectHandle){

    })
})