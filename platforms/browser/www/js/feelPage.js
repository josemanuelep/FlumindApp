var feels;

function initFeels(){
    feels = document.getElementsByClassName("feel");
}

function assingFeels(){

    for(let i=0; i<feels.length; i++){

        feels[i].addEventListener("click", function(){
            showPage(4);
            feelSelected = i;
            assingFeelIcon();
        });

    }

}