function assingFeelIcon(){
	let feel_selected = document.getElementById("feel_selected");

    switch(feelSelected){
    	case 0: 
    		feel_selected.style.background = "url('img/sentimientos/enojoIcon.svg')";
    		break;

    	case 1: 
    		feel_selected.style.background = "url('img/sentimientos/tristezaIcon.svg')";
    		break;

    	case 2: 
    		feel_selected.style.background = "url('img/sentimientos/estresIcon.svg')";
    		break;

    	case 3: 
    		feel_selected.style.background = "url('img/sentimientos/miedoIcon.svg')";
    		break;
    }

}