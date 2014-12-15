function onSubmit(){
	var xmlHttp = null;

	xmlHttp = new XMLHttpRequest();
	var text = document.getElementById("text").value;
	var state = document.getElementById("state").value;
	var day = document.getElementById("day").value;
	var meal = document.getElementById("meal").value;
	var url = "https://young-plateau-8081.herokuapp.com/srcdhall?state="
	if(isNaN(parseInt(state))){
		url += "0"
	} else {
		url += state
	}
	if(text.length > 0){
		url += "&text=" + text
	}
	if(!isNaN(parseInt(day))){
		url += "&d=" + day 
	}
	if(!isNaN(parseInt(meal))){
		url += "&m=" + meal 
	}
	xmlHttp.open( "GET", url, false );
	xmlHttp.send();
	responseJSON = xmlHttp.responseText;
	responseObject = JSON.parse(responseJSON);
	document.getElementById("response").innerHTML += "<b>" + text + "</b><br>";
	document.getElementById("response").innerHTML += responseObject.response + "<br>";
	document.getElementById("text").value = "";
	document.getElementById("state").value = responseObject.state;
	if(responseObject.d){
		document.getElementById("day").value = responseObject.d;
	}
	if(responseObject.m){
		document.getElementById("meal").value = responseObject.m;
	}
}