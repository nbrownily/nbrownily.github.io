function getIds(){

	var lastItem = document.getElementsByTagName("li");

	lastItem[7].style.color = "#900";
	lastItem[7].style.fontWeight = "bold";
	
}

window.onload=getIds;