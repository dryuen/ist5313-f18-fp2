
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "le chat";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "le cheval";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "le chien";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "l'oiseau";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}