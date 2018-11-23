// JavaScript Document
(function() {
  var questions = [{
    question: "Which word from paragraph 7 of the first reading is closest in meaning to 'weak'?",
    choices: ["subtle", "inpenetrable", "sustained", "vulnerable"],
    correctAnswer: 3
  }, {
    question: "In paragraph 12, people who act in altruistic ways are-",
    choices: ["selfless", "persistent", "resentful", "dignified"],
    correctAnswer: 0
  }, {
    question: "Read these quotations from the two selections.:'It [the author's childhood library] seemed enormous to me because, week by week, year by year, I passed through those library doors into the great world of human thought and art and story.' and 'A girl walking home from school might pick up a graphic novel that gets her excited about reading; a man on his way to the bus stop might find a volume of poetry  that changes his outlook on life.' Both of these quotations support the idea that people value -",
    choices: ["communities that welcome diversity", "the chance to share experiences with others", "making the world a better place", "the opportunity to learn something new"],
    correctAnswer: 3
  }, {
    question: "Read this sentence from paragraph 2 of 'Hunger for Books.' At that moment, standing in the children's room of the library in Ravenna, Ohio, I realized that if there were still people writing such fresh and fragrant books, then maybe one day I could write some as well. Which quotation from 'The Low-Tech Appeal of Little Free Libraries' expresses a similar sentiment?",
    choices: ["When he saw the people of his community gathering around it like a neighborhood water cooler, exchanging conversation as well as books, he knew he wanted to take his simple idea farther.", "But as DooSun You scrolled through the results, an appealingly anti-tech concept popped up.", "'Little Free Libraries create neighborhood heroes,' says Bol.", "When you open the door, serendipity (and your neighbors' taste) dictates what you'll find."],
    correctAnswer: 0
  }, {
    question: "Both the traditional libraries described in 'Hunger for Books' and the Little Free Libraries in the other article are described as -",
    choices: ["havens for people who do not like modern technology", "repositories of knowledge that offer opportunities for discovery", "popular local meeting places where people work together", "places that are inexpensive to establish and operate"],
    correctAnswer: 1
  }, {
    question: "Which quotation from 'The Low-Tech Appeal of Little Free Libraries' best supports the message of 'Hunger for Books'?",
    choices: ["In some places, Little Free Libraries are filling a role usually served by brick-and-mortar libraries; the organization's Books Around the Block program, for example, aims to bring LFLs to places where kids and adults don't have easy access to books.", "'I hoped to share that feeling with my neighbors - that's the reason I wanted a Little Free Library.'", "'We have a natural sense of wanting to be connected, but there are so many things that push us apart,' Bol says. 'I think Little Free Libraries open the door to conversations we want to have with each other.'", "'Reading books is one of the most valuable things in my life. I think a book is equal to treasure,' he says."],
    correctAnswer: 3
  }, {
    question: "While 'Hunger for Books' emphasizes the personal experience of reading, 'The Low-Tech Appeal of Little Free Libraries' -",
    choices: ["presents the perspectives of librarians and reading specialists", "depicts reading as an activity that is difficult but rewarding", "suggests that reading is an activity that unites entire communities", "reveals the differences in reading preferences around the world"],
    correctAnswer: 2
  }, {
    question: "Which word means 'supporting' or 'recommending'?",
    choices: ["browsing", "lingering", "bemoaning", "advocating"],
    correctAnswer: 3
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var scores = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    var result = numCorrect*100/questions.length;
	result = Math.round(result);
	var score = result
	parent.reportScores(score);
	scores.append('You scored ' + result + ' % ');
	return scores;
  }
})();