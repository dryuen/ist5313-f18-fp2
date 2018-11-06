// JavaScript Document
(function() {
  var questions = [{
    question: "Read this sentence from Reading 1, paragraph 16. 'And she became an ambassador as much as coach, allowing television cameras into the locker room, willing to play almost any team on almost any court.' In this sentence, the author is trying to show that Summitt -",
    choices: ["frequently sought out opportunities to appear on television", "was able to pick and choose which teams to play", "took on a role in women’s sports that went beyond coaching", "compromised her standards occasionally"],
    correctAnswer: 2
  }, {
    question: "Why does the author end the article with a quotation?",
    choices: ["To show how Pat Summitt will likely be remembered over time", "To suggest that Pat Summitt’s accomplishments may soon be eclipsed", "To imply that female coaches will never win as many games as male coaches", "To provide an opinion that differs from those expressed in the rest of the article"],
    correctAnswer: 0
  }, {
    question: "Which of these best summarizes the article?",
    choices: ["Throughout her career, Pat Summitt has been an important figure in women’s sports. Although it was difficult for her to face the discrimination directed at female players and coaches, she managed to have successful seasons at the University of Tennessee", "The popularity of women’s sports today is largely the result of the enactment of Title IX in 1972. Before that, female athletes like Pat Summitt had little funding or support for their teams. Pat Summitt’s success is an example of how Title IX helped women athletes and coaches", "Although Pat Summitt had been a very successful basketball coach for many years, herprimary accomplishment came after she developed Alzheimer’s disease. By refusing to hide her diagnosis from the public and vowing to continue coaching, she set a powerful example for others.", "Through her determination to lead and succeed, Pat Summitt has become both a successful coach and an inspiration to female athletes. She applied the work ethic she learned as a child to her playing and coaching career, ultimately winning more games than any other college coach"],
    correctAnswer: 3
  }, {
    question: "According to the author, Pat Summitt learned important lessons about how to face difficult circumstances from her time spent - ",
    choices: ["playing on the 1976 Olympic team", "dealing with her Alzheimer’s diagnosis", "working on her family’s farm", "losing games as a new coach"],
    correctAnswer: 2
  }, {
    question: "Tara VanDerveer thinks Pat Summitt is equipped to handle her illness because of - ",
    choices: ["the support from her team", "the availability of good medical care", "her physical conditioning", "her coaching experience"],
    correctAnswer: 3
  }, {
    question: "What is the primary purpose of the photos of Pat Summitt?",
    choices: ["To show how she became famous over time", "To portray both her successes and failures", "To represent different aspects of her career", "To highlight differences in her attitude over time"],
    correctAnswer: 2
  }, {
    question: "Use “No Dream Is Impossible” to answer the following questions. The selection is mainly about - ",
    choices: ["the importance of luck in finding success in Hollywood", "the need for adult guidance", "the limited career opportunities for women in Arkansas", "the importance of trusting oneself"],
    correctAnswer: 3
  }, {
    question: "Read this sentence from paragraph 3. 'One honest glance told me that only by unglamorous hard work over quite a few years would this gangling, unsure Arkansas girl be transformed into my dream of a fine actress.'In this sentence, the author admits that - ",
    choices: ["her quest would be more difficult than she had thought", "Hollywood directors didn’t think she had much talent", "it was time to start thinking about a different career", "acting was not as much fun as it had once seemed"],
    correctAnswer: 0
  },{
    question: "Which line demonstrates the author’s realization that she may have overestimated her abilities?",
    choices: ["But of course what really made me feel like catching the next bus for Arkansas was that in all the offices I managed to invade, not one casting man had looked at me with sudden interest and exclaimed, “That girl has something.”", "Since then I’ve found this inner voice always spoke the truth or made me try to find it for myself", "No one in my entire family had ever had artistic yearnings, so they looked upon my girlish dreams as a rather silly and impractical phase, which I would surely outgrow and then settle down in Arkansas like my more sensible cousins.", "It tells me no dream is impossible because faith in my inner self will guide me to its fulfillment."],
    correctAnswer: 0
  }, {
    question: "In paragraph 2, the author suggests that - ",
    choices: ["she knew she would become a successful actress as long as she worked hard", "failing would be acceptable as long as she had made the effort to succeed", "life in Hollywood was made more difficult by pressure from her family", "it would have been wise to have gotten a good job before pursuing her dream"],
    correctAnswer: 1
  }, {
    question: "The title of the boxed information, “A Dream Realized,” best reflects the juxtaposition of which two concepts?",
    choices: ["Irrationality and rationality", "Good and evil", "Ideal and actual", "Originality and banality"],
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