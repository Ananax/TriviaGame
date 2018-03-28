$(document).on('click', '#start', function() {
    game.start();
  });
  
var panel = $('#trivia');


var questions = [{
  question: "In what year was the Beatles formed?",
  Options: ["1958", "1959", "1960", "1961"],
  Answer: "1960"
}, {
  question: "In what English city were the Beatles formed in?",
  Options: ["Liverpool", "Chelsea", "London", "Manchester"],
  Answer: "Liverpool"
}, {
  question: "How many Grammy awards have the Beatles received?",
  Options: ["5", "7", "9", "11"],
  Answer: "7"
}, {
  question: "How many albums did the Beatles release?",
  Options: ["8", "10", "12", "14"],
  Answer: "12"
}, {
  question: "Who was NOT a member of the Beatles?",
  Options: ["John Lennon", "Paul McCartney", "George Michael", "Ringo Starr"],
  Answer: "Crust"
}, {
  question:  "WHich Beatles cross Abbey Road first?",
  Options: ["Ringo", "Paul", "George", "John"],
  Answer: "John"
}, {
  question: "Who was the original drummer for the Beatles?",
  Options: ["Ringo Starr", "Stuart Sutcliffe", "Bill Wyman", "Pete Best"],
  Answer: "Pete Best"
}, {
  question: "Which Album required 700 hours of recordings?",
  Options: ["White Album", "Abbey Road", "Sgt. Pepper's Lonely Hearts Club Band", "Let it Be"],
  Answer: "Sgt. Pepper's Lonely Hearts Club Band"
}, {
  question: "What record label was founded by the Beatles in 1968?",
  Options: ["EMI", "Apple Records", "Liverpool Records", "Parlophone"],
  Answer: "Apple Records"
}, {
  question: "Which Beatles album only has songs written by John Lennon and Paul McCartney?",
  Options: ["Help!", "A Hard Day's Night", "Rubber Soul", "Revolver"],
  Answer: "A Hard Day's Night"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:60,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){;
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].Options.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].Options[j] + '">' + questions[i].Options[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() === questions[1].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() === questions[9].Answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subcontainer h2').remove();
    panel.html('<h2>Good Job!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }


};
$(document).on('click', '#done', function() {
    game.done();
  });