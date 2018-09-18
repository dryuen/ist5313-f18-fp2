// this holds the current dragger HTML element
var oCurrentDragger = null;		

// this array corresponds to the dragger bays
// if you create more draggers and dragger bays, increase the argument 
// the default is 4.
var aDraggerBays = new Array( 4 );	

// initialize the dragger bays to -1.  -1 means that there is no dragger there.
for( var i = 0; i < aDraggerBays.length; i = i + 1 )
{
	aDraggerBays[ i ] = -1;
}


// this function is called when the Submit button is clicked.
function processForm()
{
	var bCorrect = true;
	
	// go through the array, the values should be in order
	for( var i = 0; i < aDraggerBays.length; i = i + 1 )
	{
		// the moment we find a break in the order, it is not correct
		if( aDraggerBays[ i ] != i )
		{
			bCorrect = false;
			break;
		}
	}
	
	if( bCorrect )
	{
		document.getElementById( "response" ).innerHTML = "Correct!";
	}
	else
	{
		// link back to the same page.
		document.getElementById( "response" ).innerHTML = "Incorrect!  <a href='drag-and-drop.html'>click here to try again</a>";
	}
}

// this function is called when a dragger is first dragged
function startDrag( evt )
{    
	evt.dataTransfer.effectAllowed = "move";
	// set a value sData in dataTransfer object to the dragger's attribute value
	// value corresponds to the dragger bay it's associated with
	evt.dataTransfer.setData( "sData", evt.target.getAttribute( "value" ) );
	// when it's dragging show a ghost image (in this case, it's showing itself)
    evt.dataTransfer.setDragImage( evt.target, 75, 50 );
    oDragger = evt;
    
    oCurrentDragger = evt.target;
    return true;   
}

// this function is called when a dragger is dropped
function dropDragger( evt )
{
	var nDraggerBayIndex = evt.target.getAttribute( "value" );
	
	// stop all events
	if( evt.stopPropagation )
	{
		evt.stopPropagation();
	}
	
	// only complete the drag into a dragger bay if the slot has not been taken 
	if( aDraggerBays[ nDraggerBayIndex ] == - 1 )
	{
		// take the slot and store the dragger's value into the array
		var nDraggerIndex = evt.dataTransfer.getData( "sData" );
		aDraggerBays[ nDraggerBayIndex ] = nDraggerIndex; 
		
		// replace the HTML of the dragger bay with the dragger (the HTML)
		evt.target.innerHTML = "<div class='dragger'>" + oCurrentDragger.innerHTML + "</div>";
		
		evt.target.style.border = "none";
		oCurrentDragger.style.display = "none";
	}
	return false;
}

// this function checks to see if the dragger bay has been taken
function isTaken( nIndex )
{
	if( aDraggerBays[ nIndex ] == -1 )
		return false;
	
	// return true if the slot has been taken by a dragger
	return true;
}

// Do not change these functions
function dragOver( evt )
{
	return false;
}

function enterDragger( evt )
{
	return true;
}

function endDrag( evt )
{
	return false;
}