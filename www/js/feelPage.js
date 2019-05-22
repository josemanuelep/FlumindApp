var feels;
var step2Icon;
var step3Icon;
var step4Icon;

function initFeels(){
    feels = document.getElementsByClassName("feel");
    step2Icon = document.getElementById("activity_feel_step2");
    step3Icon = document.getElementById("activity_feel_step3");
    step4Icon = document.getElementById("activity_feel_step4");
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
                step2Icon.style.background = "url('img/sentimientos/enojoIcon2.svg')";
                step3Icon.style.background = "url('img/sentimientos/enojoIcon3.svg')";
                step4Icon.style.background = "url('img/sentimientos/enojoIcon4.svg')";
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