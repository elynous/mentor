$(function(){
    var socket=io.connect('http://localhost:3000');

    var message=$("#message");
    var handle=$("#handle");
    var btn=$("#send");
    var output=$("#output");
    var feedback=$("#feedback");

    btn.click(function(){
        socket.emit('chat', {
            message:message.val(),
            handle:handle.val()
        });
    });

    message.keypress(function(){
        socket.emit('typing',handle.val());
    });

    socket.on('chat', (data)=>{
        feedback.html("");
        output.append("<p><strong>"+data.handle+": </strong>"+data.message+"</p>");
    });

    socket.on('typing',(data)=>{
        feedback.html("<p><em> "+data+" is typing a message..</em></p>");
    });
});