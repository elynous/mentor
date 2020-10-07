var board;
var game;

var socket = io();
 
  window.onclick = function(e) {
      socket.emit('message', 'hello world!');
  };

window.onload = function () {
    initGame();
};

socket.on('move', function (msg) {
    game.move(msg);
    board.position(game.fen());
});

var initGame = function() {
   var cfg = {
       draggable: true,
       position: 'start',
       onDrop: handleMove,
   };
   
   board = new ChessBoard('gameBoard', cfg);
   game = new Chess();
};

var handleMove = function(source, target) {
    var move = game.move({from: source, to: target, promotion:'q'});
    
    if (move === null)  return 'snapback';
    else socket.emit('move', move);
    
};
