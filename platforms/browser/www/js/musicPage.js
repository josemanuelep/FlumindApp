var player;
var playerButtons = [];
var songs = [];
var musicList;
var musicIndex;
var progress;
var timeProgress;
var indexProgress;

function initPlayer(){
    playerButtons = document.getElementsByClassName("player_button");
    progress = document.getElementById("progress");
    indexProgress = 0;
    songs = [
        {
            title: "hola",
            artist: "Fabian",
            album: "La u",
            src: "musics/Ramon.mp3"
        },{
            title: "hola2",
            artist: "Fabian",
            album: "La u",
            src: "musics/Creeper.mp3"
        }
    ];
    musicList = document.getElementById("music_list");
}

function assingPlayerButtons(){

    playerButtons[1].addEventListener("click", function(){
        playMusic();
    });

    playerButtons[2].addEventListener("click", function(){
        pauseMusic();
    });

    showMusics();

}

function showMusics(){

    for(var i = 0; i < songs.length; i++){

        const idPlayButton = "button_player_"+i;
        const idPauseButton = "button_pause_"+i;

        var music = document.createElement('div');
        music.setAttribute('class', 'music_item');

        music.innerHTML = 
        "<div class='music_info'>"+
            "<p class='music_des'>"+songs[i].title+"</p>"+
            "<p class='music_des'>"+songs[i].artist+"</p>"+
            "<p class='music_des'>"+songs[i].album+"</p>" +
        "</div>" +
        "<div id='"+idPlayButton+"' class='small_button play_button'></div>"+
        "<div id='"+idPauseButton+"' class='small_button pause_button hidden'></div>";        
        musicList.appendChild(music);
        
        const playButton = document.getElementById(idPlayButton);
        const pauseButton = document.getElementById(idPauseButton);

        playButton.addEventListener("click", function(){                    
            musicIndex = idPlayButton.charAt(idPlayButton.length - 1); 
            putMusic(songs[musicIndex].src);
            playMusic();        
        });

        pauseButton.addEventListener("click", function(){                       
            pauseMusic();
        });

    }
}

function putMusic(route){
    /* if(player && musicIndex){
        player.stop();
        noMusic(); 
    }        */ 
    
    player = new Howl({
        src: [route]
    });
    
}

function playMusic(){
    player.play();    
    var playButton = document.getElementById("button_player_"+musicIndex);
    var pauseButton = document.getElementById("button_pause_"+musicIndex);
    progress.style.width = "0%";
    indexProgress = 0;
    playerButtons[2].className = "player_button";
    playerButtons[1].className = "player_button hidden";
    playButton.className = "small_button play_button hidden";
    pauseButton.className = "small_button pause_button";
    var salto = 5/player.duration();
    timeProgress = setInterval(function(){
        if(indexProgress > 99.9){
            clearInterval(timeProgress);
            playerButtons[1].className = "player_button";
            playerButtons[2].className = "player_button hidden";
            playButton.className = "small_button play_button";
            pauseButton.className = "small_button pause_button hidden";
        }
        progress.style.width = indexProgress+"%";
        indexProgress+=salto;
    }, 50);
}

function pauseMusic(){
    player.pause();
    noMusic();
}

function noMusic(){
    var playButton = document.getElementById("button_player_"+musicIndex);
    var pauseButton = document.getElementById("button_pause_"+musicIndex);
    playButton.className = "small_button play_button";
    pauseButton.className = "small_button pause_button hidden";
    playerButtons[1].className = "player_button";
    playerButtons[2].className = "player_button hidden";    
    clearInterval(timeProgress);
}