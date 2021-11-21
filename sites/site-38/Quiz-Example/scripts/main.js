let shuffledQuestions = []; 
const questionsCountByPeople = 10;
// const questionsCountByPeople = 3;
const questionsCount = questionsCountByPeople - 1;
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

window.addEventListener('load', () =>  {
	document.querySelectorAll('.questions-count').forEach(element => {
		element.textContent = questionsCount + 1;
		// element.textContent = questionsCountByPeople;
	});
});

function handleQuestions() {
  while(shuffledQuestions.length <= questionsCount) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    // let random = questions[Math.floor(Math.random() * 10)];
    // let random = questions[Math.floor(Math.random() * 23)];
    if(!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

function NextQuestion(index) {
  handleQuestions();
  // console.log(index);
  const currentQuestion = shuffledQuestions[index];
  // document.getElementById("question-number").innerHTML = '1';
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  // document.getElementById("player-score").innerHTML = '0';
  // document.getElementById("display-question").innerHTML = 'How many days makes a week ?';
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  // document.getElementById("option-one-label").innerHTML = '10 days';
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  // document.getElementById("option-two-label").innerHTML = '14 days';
  // document.getElementById("option-three-label").innerHTML = '17 days';
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  // document.getElementById("option-four-label").innerHTML = '22 days';
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber];
  const currentQuestionAnswer = currentQuestion.correctOption;
  const options = document.getElementsByName('option');
  let correctOption = null;
  options.forEach(option => {
    if(option.value === currentQuestionAnswer) {
      correctOption = option.labels[0].id;
    }
  });
  
  // if(options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked === false) {
  //   document.getElementById("option-modal").style.display = 'flex';
  // }

  options.forEach(option => {
    if(option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.background = '#63ff3f';
      playerScore++;
      indexNumber++;
      setTimeout(function() {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.background = '#ff6363';
      document.getElementById(correctOption).style.background = '#63ff3f';
      wrongAttempt++;
      indexNumber++;
      setTimeout(function() {
        questionNumber++;
      }, 1000);
    }
  });
}

function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  setTimeout(() => {
    if (indexNumber <= questionsCount) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

function resetOptionBackground() {
  const options = document.getElementsByName('option');
  options.forEach(option => {
    document.getElementById(option.labels[0].id).style.background = '#ffdc63';
  });
}

function unCheckRadioButtons() {
  const options = document.getElementsByName('option');
  for(let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function handleEndGame() {
  let remark = null;
  let remarkColor = null;
  if(playerScore <= questionsCountByPeople * 0.3) {
    remark = "Bad Grades, keep practicing";
    remarkColor = 'red';
  } else if (playerScore > questionsCountByPeople * 0.3 && playerScore <= questionsCountByPeople * 0.7) {
    remark = "Average Grades, You can do better";
    // remarkColor = 'red';
    remarkColor = 'orange';
  } else if (playerScore > questionsCountByPeople * 0.7) {
    remark = 'Excellent, keep the good work going';
    remarkColor = 'green';
  }
  const playerGrade = (playerScore / questionsCountByPeople) * 100;
  document.getElementById('remarks').innerHTML = remark;
  document.getElementById('remarks').style.color = remarkColor;
  document.getElementById('grade-percentage').innerHTML = playerGrade.toFixed(0);
  document.getElementById('wrong-answers').innerHTML = wrongAttempt;
  document.getElementById('right-answers').innerHTML = playerScore;
  document.getElementById('score-modal').style.display = 'flex';
  document.getElementById('btn-continue').innerText = 'Restart';
}

function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  // NextQuestion(0);
  document.getElementById('score-modal').style.display = 'none';
}

function closeOptionModal() {
  document.getElementById('option-modal').style.display = 'none';
}
