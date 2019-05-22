var feels;

function initFeels(){
    feels = document.getElementsByClassName("feel");
}

function assingFeels(){

    for(let i=0; i<feels.length; i++){

        feels[i].addEventListener("click", function(){
            showPage(4);
            feelSelected = i;
            assingFeelIcon(document.getElementsByClassName("feel_selected"));
        });

    }

}

function assingFeelIcon(feel_selecteds){
	
    for(var i = 0; i < feel_selecteds.length; i++){
        switch(feelSelected){
            case 0: 
                feel_selecteds[i].style.background = "url('img/sentimientos/enojoIcon.svg')";
                break;
    
            case 1: 
                feel_selecteds[i].style.background = "url('img/sentimientos/tristezaIcon.svg')";
                break;
    
            case 2: 
                feel_selecteds[i].style.background = "url('img/sentimientos/estresIcon.svg')";
                break;
    
            case 3: 
                feel_selecteds[i].style.background = "url('img/sentimientos/miedoIcon.svg')";
                break;
        }
    }

}