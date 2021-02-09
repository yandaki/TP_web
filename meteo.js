function showCity(){
	let cities = document.getElementsByClassName("city");
	let vide=document.getElementsByClassName("flex");
	vide.style.display="none";
	let l=cities.length;

	let villeCourante=document.getElementById("choix").value;

	for(let i=0; i<l; i++){
		if(cities[i].id==villeCourante) cities[i].style.display="";
		else cities[i].style.display="none";
	}
}