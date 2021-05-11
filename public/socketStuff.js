const socket = io.connect('http://localhost:3333');

const init = () => {
  draw();
  socket.emit('init', {...player});
}

socket.on('initReturn', (data) => {
  orbs = data.orbs;
  setInterval(() => {
    socket.emit('tick', {
      xVector: player.xVector,
      yVector: player.yVector,
    })
  }, 33);
})

socket.on('tock', (data) => {
  players = data.players;
  currentPlayer = data.players.find(player => player.socketId === socket.id);
  if (currentPlayer) {
    player.locX = currentPlayer.playerData.locX;
    player.locY = currentPlayer.playerData.locY;
  }
});

socket.on('orbSwitch', (data) => {
  orbs.splice(data.index, 1, data.newOrb);
});

socket.on('updateLeaderBoard', (data) => {
  document.querySelector('.leader-board').innerHTML = "";
  data.forEach((curPlayer) => {
    document.querySelector('.leader-board').innerHTML += `<li class="leaderboard-player">${curPlayer.name} - ${curPlayer.score}</li>`;
  });
});

socket.on('playerDeath',(data)=>{
  document.querySelector('#game-message').innerHTML = `${data.died.name} absorbed by ${data.killedBy.name}`
  $("#game-message").css({
      "background-color": "#00e6e6",
      "opacity": 1
  });
  $("#game-message").show();
  $("#game-message").fadeOut(5000);
});
