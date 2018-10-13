// JavaScript Document
(function() {
  var questions = [{
    question: "The author uses a simile to describe the apples in paragraph 2 to convey  ",
    choices: ["their mythic appeal", "the advertising techniques used in foreign magazines", "their universal symbolism", "the contrast between Chinese and foreign supermarkets"],
    correctAnswer: 0
  }, {
    question: "Read these sentences from paragraph 4. 'She pouted unhappily the whole day and evening and didn't want to say one word to me. When she woke up the next morning, she still had not forgotten' . In these sentences, the author depicts the daughter as ",
    choices: ["deceptive", "envious", "resentful", "reflective"],
    correctAnswer: 2
  }, {
    question: "Read this quotation from paragraph 4. 'I had never seen such stubbornness for so long in my daughter, even at her young age. I was shocked. These red American apples had such scary appeal to the young children.'What does this quotation reveal about the narrator’s conflict?",
    choices: ["He is displeased with his daughter’s rebellious behavior", "He is stunned by how easily children are enticed by the appearance of the apples.", "He is uncertain about whether to buy his daughter what she wants.", "He is angry that the American apples are being marketed specifically to children."],
    correctAnswer: 1
  }, {
    question: "What do the narrator’s actions in paragraph 5 reveal about his relationship with his daughter?",
    choices: ["He is proud of her determination.", "He is frustrated by her constant demands.", "He is supporting her open-mindedness about other cultures.", "He is perplexed by her regard for inanimate objects."],
    correctAnswer: 2
  }, {
    question: "Paragraphs 7 and 8 are important to the development of the plot because they -",
    choices: ["provide an unexpected ending", "signify the point at which the narrator and his daughter understand their conflict", "reflect the narrator's past mistakes and lessons he has learned", "present the solution to the main problem"],
    correctAnswer: 0
  }, {
    question: "Which sentence best explains the narrator’s reluctance to buy the American apples?",
    choices: ["I had expected my daughter to jump for joy again, yet at the very first bite, she froze, a puzzled look in her vivid eyes.", "In this city of ours where people like to chase whatever is fashionable, many kinds of foreign apples flood in like mad, the most attention-catching of which are American apples.", "The red ones are so red, green ones so green, shiny, wax like, as if painted on", "It’s just that in my heart I didn’t want to waste my money on such hot foreign things."],
    correctAnswer: 3
  }, {
    question: "What major theme is explored in the story?",
    choices: ["Responsibility is often difficult to accept.", "Appearances can be deceiving.", "Working hard is the best way to accomplish a goal.", "Family bonds are priceless."],
    correctAnswer: 1
  }, {
    question: "",
    choices: ["", "", "", ""],
    correctAnswer: 1
  },{
    question: "What major theme is explored in the story?",
    choices: ["Responsibility is often difficult to accept.", "Appearances can be deceiving.", "Working hard is the best way to accomplish a goal.", "Family bonds are priceless."],
    correctAnswer: 1
  },{
    question: "What major theme is explored in the story?",
    choices: ["Responsibility is often difficult to accept.", "Appearances can be deceiving.", "Working hard is the best way to accomplish a goal.", "Family bonds are priceless."],
    correctAnswer: 1
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
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    var result = numCorrect*100/questions.length;
	result = Math.round(result);
	score.append('You scored ' + result + ' % ');
			  
    return score;
  }
})();