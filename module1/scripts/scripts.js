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
    			sessionStorage.setItem("page2", "0");
    			sessionStorage.setItem("page3", "0");
    			sessionStorage.setItem("page4", "0");
    			sessionStorage.setItem("page5", "0");
    			sessionStorage.setItem("page6", "0");
    			sessionStorage.setItem("page7", "0");
    			sessionStorage.setItem("page8", "0");
    			sessionStorage.setItem("page9", "0");
    			sessionStorage.setItem("page10", "0");
    			sessionStorage.setItem("page11", "0");
    			sessionStorage.setItem("page12", "0");
    			sessionStorage.setItem("page13", "0");
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
	oScorm.set("cmi.core.score.raw", score);
	oScorm.set("cmi.core.score.min", 0);
	oScorm.set("cmi.core.score.max", 100);
	if (score>=43)
	{
	oScorm.set("cmi.core.score.lesson_status", "passed");
	} 
	else 
	{
	oScorm.set("cmi.core.score.lesson_status", "failed");
	}
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
	var t2 = sessionStorage.getItem("page2");
	var t3 = sessionStorage.getItem("page3");
	var t4 = sessionStorage.getItem("page4");
	var t5 = sessionStorage.getItem("page5");
	var t6 = sessionStorage.getItem("page6");
	var t7 = sessionStorage.getItem("page7");
	var t8 = sessionStorage.getItem("page8");
	var t9 = sessionStorage.getItem("page9");
	var t10 = sessionStorage.getItem("page10");
	var t11 = sessionStorage.getItem("page11");
	var t12 = sessionStorage.getItem("page12");
	var t13 = sessionStorage.getItem("page13");
	
	if (t2 == "1" && t3 == "1" && t4 == "1" && t5 == "1" && t6 == "1" && t7 == "1" && t8 == "1" && t9 == "1" && t10 == "1" && t11 == "1" && t12 == "1" && t13 == "1") 
	{
	document.getElementById("content-frame").contentWindow.document.getElementById("quiz-link").style.display = "inline";}
	}

function visitPage2()
{
 sessionStorage.setItem( "page2", "1" );
  checkAllVisited();
}
function visitPage3()
{
 sessionStorage.setItem( "page3", "1" );
  checkAllVisited();
}
function visitPage4()
{
 sessionStorage.setItem( "page4", "1" );
  checkAllVisited();
}
function visitPage5()
{
 sessionStorage.setItem( "page5", "1" );
  checkAllVisited();
}
function visitPage6()
{
 sessionStorage.setItem( "page6", "1" );
  checkAllVisited();
}
function visitPage7()
{
 sessionStorage.setItem( "page7", "1" );
  checkAllVisited();
  }
function visitPage8()
{
 sessionStorage.setItem( "page8", "1" );
  checkAllVisited();
}
function visitPage9()
{
 sessionStorage.setItem( "page9", "1" );
  checkAllVisited();
}
function visitPage10()
{
 sessionStorage.setItem( "page10", "1" );
  checkAllVisited();
}
function visitPage11()
{
 sessionStorage.setItem( "page11", "1" );
  checkAllVisited();
}
function visitPage12()
{
 sessionStorage.setItem( "page12", "1" );
  checkAllVisited();
}
function visitPage13()
{
 sessionStorage.setItem( "page13", "1" );
  checkAllVisited();
}


