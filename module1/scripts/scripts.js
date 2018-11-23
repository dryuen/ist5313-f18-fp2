// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        		// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    			sessionStorage.setItem( "course_started", "1" );
    			sessionStorage.setItem("page2Visited", "unvisited");
    			sessionStorage.setItem("page3Visited", "unvisited");
    			sessionStorage.setItem("page4Visited", "unvisited");
    			sessionStorage.setItem("page5Visited", "unvisited");
    			sessionStorage.setItem("page6Visited", "unvisited");
    			sessionStorage.setItem("page7Visited", "unvisited");
    			sessionStorage.setItem("page8Visited", "unvisited");
    			sessionStorage.setItem("page9Visited", "unvisited");
    			sessionStorage.setItem("page10Visited", "unvisited");
    			sessionStorage.setItem("page11Visited", "unvisited");
    			sessionStorage.setItem("page12Visited", "unvisited");
    			
			// set the values you want to persist throughout the website here
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
		// SCORM 1.2
        // always set the status to incomplete
		oScorm.set( "cmi.core.lesson_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
		alert( "Welcome, " + oScorm.get( "cmi.core.student_name" ) + "!" );
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores( score )
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}
function checkAllVisited()
	{
	var t2 = sessionStorage.getItem("page2Visited");
	var t3 = sessionStorage.getItem("page3Visited");
	var t4 = sessionStorage.getItem("page4Visited");
	var t5 = sessionStorage.getItem("page5Visited");
	var t6 = sessionStorage.getItem("page6Visited");
	var t7 = sessionStorage.getItem("page7Visited");
	var t8 = sessionStorage.getItem("page8Visited");
	var t9 = sessionStorage.getItem("page9Visited");
	var t10 = sessionStorage.getItem("page10Visited");
	var t11 = sessionStorage.getItem("page11Visited");
	var t12 = sessionStorage.getItem("page12Visited");
	if (t2 == "visited" && t3 == "visited" && t4 == "visited" && t5 == "visited" && t6 == "visited" && t7 == "visited" && t8 == "visited" && t9 == "visited" && t10 == "visited" && t11 == "visited" && t12 == "visited") 
	{
	document.getElementById("content-frame").contentWindow.document.getElementById("quiz-link").style.display = "inline";}
	}

function visitPage2()
{
 sessionStorage.setItem( "page2Visited", "visited" );
  checkAllVisited();
}
function visitPage3()
{
 sessionStorage.setItem( "page3Visited", "visited" );
  checkAllVisited();
}
function visitPage4()
{
 sessionStorage.setItem( "page4Visited", "visited" );
  checkAllVisited();
}
function visitPage5()
{
 sessionStorage.setItem( "page5Visited", "visited" );
  checkAllVisited();
}
function visitPage6()
{
 sessionStorage.setItem( "page6Visited", "visited" );
  checkAllVisited();
}
function visitPage7()
{
 sessionStorage.setItem( "page7Visited", "visited" );
  checkAllVisited();
  }
function visitPage8()
{
 sessionStorage.setItem( "page8Visited", "visited" );
  checkAllVisited();
}
function visitPage9()
{
 sessionStorage.setItem( "page9Visited", "visited" );
  checkAllVisited();
}
function visitPage10()
{
 sessionStorage.setItem( "page10Visited", "visited" );
  checkAllVisited();
}
function visitPage11()
{
 sessionStorage.setItem( "page11Visited", "visited" );
  checkAllVisited();
}
function visitPage12()
{
 sessionStorage.setItem( "page12Visited", "visited" );
  checkAllVisited();
}


