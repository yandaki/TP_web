function showCity(){
	let cities = document.getElementsByClassName("city");

	let l=cities.length;
	for(let i=0; i<l; i++){
		cities[i].style.display="none";
	}
	let villeCourante=document.getElementById("choix").value;
	for(let i=0; i<l; i++){
		if(cities[i].id==villeCourante) cities[i].style.display="";
		else cities[i].style.display="none";
	}
}