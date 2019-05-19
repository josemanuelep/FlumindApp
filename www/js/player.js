var player;

function putMusic(route){
    if(player)
        player.stop();
    
    player = new Howl({
        src: [route]
    });
}