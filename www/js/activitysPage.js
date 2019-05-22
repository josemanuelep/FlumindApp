var activitys;

function initActivitys(){
	activitys = document.getElementsByClassName("activity");
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

}