function jsDropDown(imgid , newimg)
{
	var graphFile = "dropdown.png";
	if(newimg == "mayors")
		graphFile = "Elected black mayors in municipal election.jpg";
	if(newimg == "municipalities")
		graphFile = "Minority governed municipalities.jpg";
	document.getElementById(imgid).src = "images/" + graphFile;
}

