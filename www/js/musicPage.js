var player;
var playerButtons = [];
var progress;
var timeProgress;
var indexProgress;

function initPlayer(){
    playerButtons = document.getElementsByClassName("player_button");
    progress = document.getElementById("progress");
    indexProgress = 0;
}

function assingPlayerButtons(){

    playerButtons[1].addEventListener("click", function(){
        player.play();
        indexProgress = 0;
        progress.style.width = "0%";
        playerButtons[2].className = "player_button";
        playerButtons[1].className = "player_button hidden";
        var salto = 5/player.duration();
        timeProgress = setInterval(function(){
            if(indexProgress >= 100){
                clearInterval(timeProgress);
                playerButtons[1].className = "player_button";
                playerButtons[2].className = "player_button hidden";
            }
            progress.style.width = indexProgress+"%";
            indexProgress+=salto;
        }, 50);
    });

    playerButtons[2].addEventListener("click", function(){
        player.pause();
        playerButtons[1].className = "player_button";
        playerButtons[2].className = "player_button hidden";
        clearInterval(timeProgress);
    });

}

function putMusic(route){
    if(player)
        player.stop();
    
    player = new Howl({
        src: [route]
    });
}