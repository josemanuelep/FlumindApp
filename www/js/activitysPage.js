var activitys;

function initActivitys(){
	activitys = document.getElementsByClassName("activity");
}

function assingActivitys(){
	
	activitys[0].addEventListener("click", function(){
		showPage(5);
	});

	activitys[1].addEventListener("click", function(){
		showPage(6);
	});

	activitys[2].addEventListener("click", function(){
		showPage(7);
	});

	activitys[3].addEventListener("click", function(){
		showPage(8);
	});

}