window.onload = function() {

    setTimeout(function(){

        var circles = document.getElementsByClassName("circle");
        var flumindText = document.getElementById("flumind_text");

        circles[0].style.transform = 'scale(.1)';

        setTimeout(function(){
            circles[0].style.display = 'none';
            circles[1].style.transform = 'scale(.1)';
        }, 310);

        setTimeout(function(){
            circles[1].style.display = 'none';
            circles[2].style.transform = 'scale(.1)';
        }, 700);

        setTimeout(function(){
            circles[2].style.display = 'none';
            circles[3].style.transform = 'scale(.1)';
        }, 1050);
        
        setTimeout(function(){
            circles[3].style.display = 'none';
            circles[4].style.transform = 'scale(.1)';
        }, 1400);

        setTimeout(function(){
            circles[4].style.transform = 'scale(15)';
        }, 2000);

        setTimeout(function(){
            flumindText.style.background = 'linear-gradient(to right top, #7a49ae, #7757bc, #7365ca, #6e72d6, #697fe2)';
            flumindText.style.webkitTextFillColor = 'transparent';
            flumindText.style.webkitBackgroundClip = 'text';
            circles[4].style.background = '#363651';
        }, 2150);

        setTimeout(function(){
            start();
        }, 3350);

    }, 600);

};