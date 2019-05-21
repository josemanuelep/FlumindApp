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
            src: "musics/Ramon.mp3",
            duration: "2.0908541666666665"
        },{
            title: "hola2",
            artist: "Fabian",
            album: "La u",
            src: "musics/Creeper.mp3",
            duration: "7.916166666666666"
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
            putMusic(idPlayButton.charAt(idPlayButton.length - 1));
            playMusic(); 
        });

        pauseButton.addEventListener("click", function(){                       
            pauseMusic();
        });

    }
}

function putMusic(index){
    if(player){
        player.stop();
        indexProgress = 0;
        noMusic(); 
    }

    musicIndex = index;
    
    player = new Howl({
        src: [songs[index].src]
    });
    
}

function playMusic(){
    player.play();    
    var playButton = document.getElementById("button_player_"+musicIndex);
    var pauseButton = document.getElementById("button_pause_"+musicIndex);
    progress.style.width = "0%";
    playerButtons[2].className = "player_button";
    playerButtons[1].className = "player_button hidden";
    playButton.className = "small_button play_button hidden";
    pauseButton.className = "small_button pause_button";
    var salto = 5/songs[musicIndex].duration;
    console.log("d:"+songs[musicIndex].duration);
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