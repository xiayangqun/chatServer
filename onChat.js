//onChat.js

module.exports=function(commend, clientData, singleConnectionHandle, allConnectionHandles) {
        
        //console.log(commend);

        if(commend !=="chat")
            throw new Error('this commend is only server for "chat" ');

          var serverData={
            time: Date.parse(new Date())/1000 ,
            world:clientData.world,
        };

          var responseData={
            clientData:clientData,
            serverData:serverData,
            commend:commend
        };

        var responseString=JSON.stringify(responseData);
        for(var i=0;i<allConnectionHandles.length;i++)
            allConnectionHandles[i].send(responseString);

}