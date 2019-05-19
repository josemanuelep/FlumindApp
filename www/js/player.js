var player = new Howl({
    src: ['musics/StarWars.mp3']
});

function changeMusic(route){
    player.stop();
    player = new Howl({
        src: [route]
    });
}