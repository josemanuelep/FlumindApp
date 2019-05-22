var activitys;
var steps;
var stepButtons;

function initActivitys(){
	activitys = document.getElementsByClassName("activity");
	steps = document.getElementsByClassName("true_step");
	stepButtons = document.getElementsByClassName("step_button");
}

function assingActivitys(){
	
	activitys[0].addEventListener("click", function(){
		if(feelSelected == 0){
			showPage(5);
		}
	});

	activitys[1].addEventListener("click", function(){
		if(feelSelected == 0){
			showPage(6);
		}
	});

	activitys[2].addEventListener("click", function(){
		if(feelSelected == 0){
			showPage(7);
		}
	});

	activitys[3].addEventListener("click", function(){
		if(feelSelected == 0){
			showPage(8);
		}
	});

	steps[0].addEventListener("click", function(){
		showPage(9);
	});

	steps[1].addEventListener("click", function(){
		showPage(10);
	});

	steps[2].addEventListener("click", function(){
		showPage(11);
	});

	steps[3].addEventListener("click", function(){
		showPage(12);
	});

	stepButtons[0].addEventListener("click", function(){
		showPage(10);
	});

	stepButtons[1].addEventListener("click", function(){
		showPage(11);
	});

	stepButtons[2].addEventListener("click", function(){		
		showPage(12);
	});

	stepButtons[3].addEventListener("click", function(){
		cleanPages();
		showPage(4);
	});

}