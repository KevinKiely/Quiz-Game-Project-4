var navBar= document.querySelector("#navbar");
var highScores= document.querySelector("#high-scores-button");
var timer= document.querySelector("#timeLeft");
var gameScore= document.querySelector("#gameScore");
var startMenu= document.querySelector("#start-menu");
var startBtn= document.querySelector("#start-button");
var app= document.querySelector(".app");
var quiz= document.querySelector(".quiz");
var answerOne= document.querySelector("#answer-1");
var answerTwo= document.querySelector("#answer-2");
var answerThree= document.querySelector("#answer-3");
var answerFour= document.querySelector("#answer-4");
var questionText= document.querySelector("#question-text");
var gameOver= document.querySelector("#Game-Over");
var finalScore= document.querySelector("#final-score");
var playAgain= document.querySelector("#play-again");



var questions= [
    {
        title: 'What is the capital of Afghanistan?',
        options: ["Ottawa","Bogota","Kabul","Nassau"],
        answer: "Kabul"
    },
    {
        title: 'What is the capital of Peru?',
        options: ["Lima","Bogota","Minsk","Berlin"],
        answer: "Lima"
    },
    {
        title: 'What is the capital of Hungary?',
        options: ["New Delhi","Dublin","Jakarta","Budapest"],
        answer: "Budapest"
    },
    {
        title: 'What is the capital of Uganda?',
        options: ["Bissau","Kampala","Tehran","Hanoi"],
        answer: "Kampala"
    },
    {
        title: 'What is the capital of Libya?',
        options: ["Tripoli","Ottawa","Lusaka","Rome"],
        answer: "Tripoli"
    },
];


var score= 0;
var timeLeft= 60;
var questionNumber= 0;


startBtn.addEventListener('click', startGame);
playAgain.addEventListener('click', startGame);
answerOne.addEventListener('click',checkAnswer);
answerTwo.addEventListener('click',checkAnswer);
answerThree.addEventListener('click',checkAnswer);
answerFour.addEventListener('click',checkAnswer);


function endGame() {

}


function setQuestion() {
console.log(questions[questionNumber]);
if (questions[questionNumber]===undefined) {
    console.log("Game Over!");
    app.setAttribute("style","display:none");
    quiz.setAttribute("style", "display:none");
    gameOver.setAttribute("style","display:block");
    endGame();
    
} else {
questionText.textContent=questions[questionNumber].title;
answerOne.textContent=questions[questionNumber].options[0];
answerTwo.textContent=questions[questionNumber].options[1];
answerThree.textContent=questions[questionNumber].options[2];
answerFour.textContent= questions[questionNumber].options[3];
}
}



function startTimer() {
    var timeInterval = setInterval (function () {
        if (timeLeft >=1) {
            timer.textContent = timeLeft;
            timeLeft--;
        } 
        else {
            timer.textContent = '';
            clearInterval(timeInterval);
            console.log("Game Over!");
            app.setAttribute("style", "display:none");
            quiz.setAttribute("style", "display:none");
            gameOver.setAttribute("style","display:block");
            endGame();
        }
    }, 1000);
}

function startGame(event) {
    console.log("Game Starting;");
    startTimer();
    startMenu.setAttribute("style", "display:none");
    app.setAttribute("style", "display:block");
    quiz.setAttribute("style","display:block");
    setQuestion();
}



function checkAnswer(event) {
 var El=event.target;
 var answer=questions[questionNumber].answer;
 console.log("answer " + answer);
 console.log(El.textContent);

 if (El.textContent===answer) {
score++;
 gameScore.textContent = `Score: ${score}`;
 questionNumber++;
 setQuestion();
 }
 else {
 console.log("Incorrect");
 timeLeft=timeLeft-10;
 questionNumber++;
 setQuestion();
 }
}







/*

function checkAnswer(event){
    var El=event.target;
    var answer=questions[questionNumber].answer;

    if(El.value===answer);
    else();
    
    questionNumber++ ;
    setQuestion();

}


*/





// Starting Page: Has the navbar, with a score, highscore (local storage), and timer elements. There is a large start button, with some explanation to the rules of the game below it// 


//The start button will be connected to an event listener. Once the start button is clicked, the "quiz" element will become visible, the start button and explanation will become hidden/removed from the DOM. Also, a timer will start from 80 seconds. 


//Put all of your questions into an array "Question-1", "Question-2", etc*. Then use the .split command so separate them. 

//Then, the first question wil become visible. It will have 4 answer buttons, each with an ID of correct or incorrect. There will be 2 more event listeners. Maybe use prevent default or stop propogation if things aren't working. The 2 event listeners are for either correct or incorrect responses.

//For correct responses, increase the score count by 1, then make the current question invisible, increase the question in the array by 1, and add the visible attribute to the new question//

//For incorrect questions, decrease the timer by 10 seconds, 


//Once the timer reaches 0 seconds or you finish all the questions, stop all activity however possible, and make a final screen appear with your score, a button to add to the HIGHSCORE list using a key.value pair, and a button to start the game again (using same function as the start button)


/*

var choice1 = document.getElementByID("choice1");
choice.click = checkAnswer();

var correctAnswer;


//create html for title, 4 html elements for each option

for (i=0; i<question.length();i++){
//#1 Populate html element with correct data

$(title).text =questions[i].title;
$(options).text =questions[i].option;

correctAnswer = questions[i].answer;
}

*/