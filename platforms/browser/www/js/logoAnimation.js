window.onload = function() {

    setTimeout(function(){

        var logo = document.getElementsByClassName("circle");
        var flumindText = document.getElementById("flumind_text");

        logo[0].style.transform = 'scale(.1)';

        setTimeout(function(){
            logo[0].style.display = 'none';
            logo[1].style.transform = 'scale(.1)';
        }, 310);

        setTimeout(function(){
            logo[1].style.display = 'none';
            logo[2].style.transform = 'scale(.1)';
        }, 700);

        setTimeout(function(){
            logo[2].style.display = 'none';
            logo[3].style.transform = 'scale(.1)';
        }, 1050);
        
        setTimeout(function(){
            logo[3].style.display = 'none';
            logo[4].style.transform = 'scale(.1)';
        }, 1400);

        setTimeout(function(){
            logo[4].style.transform = 'scale(15)';
        }, 2000);

        setTimeout(function(){
            flumindText.style.background = 'linear-gradient(to right top, #7a49ae, #7757bc, #7365ca, #6e72d6, #697fe2)';
            flumindText.style.webkitTextFillColor = 'transparent';
            flumindText.style.webkitBackgroundClip = 'text';
            logo[4].style.background = '#363651';
        }, 2150);

        setTimeout(function(){
            start();
        }, 3350);

    }, 600);

};