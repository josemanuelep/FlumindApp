var views = [];
var player;
var playerButtons = [];
var infos = [];
var songs = [];
var musicList;
var musicIndex;
var progress;
var timeProgress;
var indexProgress;
var musicBtnBack;
var reproducing;

function initPlayer(){
    views = document.getElementsByClassName("music_container");
    playerButtons = document.getElementsByClassName("player_button");
    progress = document.getElementById("progress");
    indexProgress = 0;
    songs = [
        {
            title: "Début",
            artist: "Mélanie Laurent",
            album: "En t'attendant",
            src: "musics/debut.mp3",
            picture: "musics/img/debut.jpg",
            duration: "161.2"
        },
        {
            title: "Gaze",
            artist: "Moux",
            album: "Gaze",
            src: "musics/gaze.mp3",
            picture: "musics/img/gaze.jpg",
            duration: "153.2"
        },{
            title: "Strata",
            artist: "Poppy Ackroyd",
            album: "Sketches",
            src: "musics/strata.mp3",
            picture: "musics/img/strata.jpg",
            duration: "273.3"
        },
        {
            title: "Qi",
            artist: "Phildel",
            album: "Qi",
            src: "musics/qi.mp3",
            picture: "musics/img/qi.jpg",
            duration: "319.8"
        },
        {
            title: "Norrsken",
            artist: "Karin Borg",
            album: "Norrsken",
            src: "musics/norrsken.mp3",
            picture: "musics/img/norrsken.jpg",
            duration: "95.6"
        },
        {
            title: "Naive Spin",
            artist: "Aaron Lansing",
            album: "Naive Spin",
            src: "musics/naive.mp3",
            picture: "musics/img/naive.jpg",
            duration: "156.3"
        },
        {
            title: "Tallis one",
            artist: "Samuel Lindon",
            album: "Tallis one",
            src: "musics/tallis.mp3",
            picture: "musics/img/tallis.jpg",
            duration: "125.2"
        },
        {
            title: "Chasing stars",
            artist: "Moux",
            album: "Gaze",
            src: "musics/chasing.mp3",
            picture: "musics/img/chasing.jpg",
            duration: "142.6"
        },
        {
            title: "Time",
            artist: "Poppy Ackroyd",
            album: "Sketches",
            src: "musics/time.mp3",
            picture: "musics/img/time.jpg",
            duration: "351.8"
        },
        {
            title: "Intro",
            artist: "Black Elk",
            album: "Sparks",
            src: "musics/intro.mp3",
            picture: "musics/img/intro.jpg",
            duration: "99.2"
        }
    ];    
    musicList = document.getElementById("music_list");
    infos = document.getElementsByClassName("player_music_info");
    musicBtnBack = document.getElementById("music_back_button");
}

function assingPlayerButtons(){

    playerButtons[0].addEventListener("click", function(){
        if(musicIndex > 0) {
            musicIndex -= 1;
            changeToPreviousMusic();
        }
    });

    playerButtons[1].addEventListener("click", function(){
        if(!player){
            putMusic(musicIndex);
        }
        playMusic();
    });

    playerButtons[2].addEventListener("click", function(){
        pauseMusic();
    });

    playerButtons[3].addEventListener("click", function(){
        if(musicIndex < songs.length - 1) {
            musicIndex += 1;
            changeToNextMusic();
        }
    });

    musicBtnBack.addEventListener("click", function(){
        views[1].className = "player music_container animated fadeOutRight";
        views[0].className = "music_container animated fadeInLeft";
        setTimeout(function(){
            views[0].className = "music_container";
        }, 900);
        musicBtnBack.className = "hidden";
    });

    showMusics();

}

function showMusics(){

    for(var i = 0; i < songs.length; i++){

        const idInfoButton = "info_button_"+i;
        const idPlayButton = "play_button_"+i;
        const idPauseButton = "pause_button_"+i;

        var music = document.createElement('div');
        music.setAttribute('class', 'music_item');

        music.innerHTML = 
        "<div id='"+idInfoButton+"' class='music_info'>"+
            "<p class='music_des'>"+songs[i].title+"</p>"+
            "<p class='music_des'>"+songs[i].artist+"</p>"+
            "<p class='music_des'>"+songs[i].album+"</p>" +
        "</div>" +
        "<div id='"+idPlayButton+"' class='small_button play_button'></div>"+
        "<div id='"+idPauseButton+"' class='small_button pause_button hidden'></div>";        
        musicList.appendChild(music);
        
        const infoButton = document.getElementById(idInfoButton);
        const playButton = document.getElementById(idPlayButton);
        const pauseButton = document.getElementById(idPauseButton);

        infoButton.addEventListener("click", function(){
            musicIndex = parseInt(idPlayButton.charAt(idPlayButton.length - 1));     
            musicBtnBack.className = "";            
            showPlayer();
            
        });

        playButton.addEventListener("click", function(){                   
            putMusic(parseInt(idPlayButton.charAt(idPlayButton.length - 1)));
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
        progress.style.width = "0%";        
        noMusic(); 
    }

    musicIndex = index;
    
    player = new Howl({
        src: [songs[index].src]
    });
    
}

function playMusic(){
    if(reproducing >= 0 && musicIndex != reproducing){
        player.stop();
        putMusic(musicIndex);        
    }
    player.play();    
    var playButton = document.getElementById("play_button_"+musicIndex);
    var pauseButton = document.getElementById("pause_button_"+musicIndex);    
    playerButtons[2].className = "player_button";
    playerButtons[1].className = "player_button hidden";
    playButton.className = "small_button play_button hidden";
    pauseButton.className = "small_button pause_button";
    reproducing = musicIndex;
    progress.style.visibility = "visible";
    var salto = 5/songs[musicIndex].duration;
    timeProgress = setInterval(function(){
        progress.style.width = indexProgress+"%";
        indexProgress+=salto;
        if(indexProgress > 102){            
            playerButtons[1].className = "player_button";
            playerButtons[2].className = "player_button hidden";
            playButton.className = "small_button play_button";
            pauseButton.className = "small_button pause_button hidden";
            indexProgress = 0;    
            clearInterval(timeProgress);        
        }        
    }, 50);
}

function pauseMusic(){
    player.pause();
    noMusic();
}

function noMusic(){
    var playButton = document.getElementById("play_button_"+reproducing);
    var pauseButton = document.getElementById("pause_button_"+reproducing);
    playButton.className = "small_button play_button";
    pauseButton.className = "small_button pause_button hidden";
    playerButtons[1].className = "player_button";
    playerButtons[2].className = "player_button hidden";    
    clearInterval(timeProgress);
}

function showPlayer(){
    changeMusic();
    views[0].className = "music_container animated fadeOutLeft";
    views[1].className = "player music_container animated fadeInRight";
}

function changeToPreviousMusic(){
    infos[0].className = "player_music_info music_picture animated fadeOutRight";    
    setTimeout(function(){
        changeMusic();
        infos[0].className = "player_music_info music_picture animated fadeInLeft";
    }, 400);
}

function changeToNextMusic(){
    infos[0].className = "player_music_info music_picture animated fadeOutLeft";
    setTimeout(function(){
        changeMusic();
        infos[0].className = "player_music_info music_picture animated fadeInRight";
    }, 400);
}

function changeMusic(){
    editInfo();
    playerButtons[2].className = "player_button";
    playerButtons[1].className = "player_button hidden";
    progress.style.visibility = "visible";
    if(musicIndex != reproducing){
        playerButtons[2].className = "player_button hidden";
        playerButtons[1].className = "player_button";
        clearInterval(timeProgress);
        progress.style.visibility = "hidden";        
    }
}

function editInfo(){
    infos[0].style.background = "url("+songs[musicIndex].picture+")";

    infos[1].innerHTML = "";
    infos[1].appendChild(document.createTextNode(songs[musicIndex].title));

    infos[2].innerHTML = "";
    infos[2].appendChild(document.createTextNode(songs[musicIndex].artist));
}