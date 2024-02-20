var navBar= document.querySelector("#navbar");
var timer= document.querySelector("#timeLeft");
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

// This is for the Highscore Section
var highScoresBtn= document.querySelector("#high-scores-button");
var highScoresDisplay= document.querySelector("#high-scores");
var goToMainMenuBtn= document.querySelector("#main-menu-button");
var scoreOne=document.querySelector("#score-one");
var scoreTwo=document.querySelector("#score-two");
var scoreThree=document.querySelector("#score-three");
var scoreFour=document.querySelector("#score-four");
var scoreFive=document.querySelector("#score-five");

//This is to save your final score
var initials= document.querySelector("#Initials");
var submitBtn= document.querySelector("#submit-score");


var questions= [
    {
        title: '1. What is the capital of Afghanistan?',
        options: ["Ottawa","Bogota","Kabul","Nassau"],
        answer: "Kabul"
    },
    {
        title: '2. What is the capital of Peru?',
        options: ["Lima","Bogota","Minsk","Berlin"],
        answer: "Lima"
    },
    {
        title: '3. What is the capital of Hungary?',
        options: ["New Delhi","Dublin","Jakarta","Budapest"],
        answer: "Budapest"
    },
    {
        title: '4. What is the capital of Uganda?',
        options: ["Bissau","Kampala","Tehran","Hanoi"],
        answer: "Kampala"
    },
    {
        title: '5. What is the capital of Libya?',
        options: ["Tripoli","Ottawa","Lusaka","Rome"],
        answer: "Tripoli",
    },
];

var topFive= [
    {
        initials: `XX`,
        finalScore: 0,
    },
    {
        initials: `XX`,
        finalScore: 0,
    },
    {
        initials: `XX`,
        finalScore: 0,
    },
    {
        initials: `XX`,
        finalScore: 0,
    },
    {
        initials: `XX`,
        finalScore: 0,
    },
    

]


//Universal Variables
var score= 0;
var timeLeft= 60;
var questionNumber= 0;
timer.textContent = '';

// Starts the game
startBtn.addEventListener('click', startGame);
//Event listeners for each answer button
answerOne.addEventListener('click',checkAnswer);
answerTwo.addEventListener('click',checkAnswer);
answerThree.addEventListener('click',checkAnswer);
answerFour.addEventListener('click',checkAnswer);


// This will open the highscores page
highScoresBtn.addEventListener('click',checkScores);

function checkScores() {
    // grab localStorage stored data
    // convert it to JS

    app.setAttribute("style","display:none");
    quiz.setAttribute("style", "display:none");
    startMenu.setAttribute("style","display:none");
    gameOver.setAttribute("style","display:none");
    highScoresDisplay.setAttribute("style","display:block");
    
    let scoreBoard = localStorage.getItem('topfive');
    console.log (scoreBoard);
    console.log (typeof scoreBoard);
    let scoresArray= JSON.parse(scoreBoard);
    console.log (scoresArray);
    console.log (typeof scoresArray);

    
    scoreOne.textContent= `${scoresArray[0].initials} = ${scoresArray[0].finalScore}`;
    scoreTwo.textContent= `${scoresArray[1].initials} = ${scoresArray[1].finalScore}`;
    scoreThree.textContent= `${scoresArray[2].initials} = ${scoresArray[2].finalScore}`;
    scoreFour.textContent= `${scoresArray[3].initials} = ${scoresArray[3].finalScore}`;
    scoreFive.textContent= `${scoresArray[4].initials} = ${scoresArray[4].finalScore}`;
}


submitBtn.addEventListener('click',saveScore);

function saveScore() {
    console.log(score);
  
    if(!localStorage.getItem('topfive')) {
        localStorage.setItem('topfive', JSON.stringify(topFive));
    } else {
        storedData = localStorage.getItem('topfive');
    }

    // IF NOT --> CREATE loaclStorage Data

    // Where or WHEN is the initial dataset created? 

    //let initalDataset = [];

    /*
    localStorage.setItem('topfive', JSON.stringify(topFive));
    let storedData = localStorage.getItem('topfive');
    */
    
    let finalScore = {
        initials: initials.value,
        finalScore: score,
    }
    console.log("new Score: ", finalScore);
    
    let jsArray = JSON.parse(storedData);
    console.log (jsArray);
    console.log (typeof jsArray);

    jsArray.push(finalScore);
    console.log(jsArray);

    jsArray.sort(function(a,b){
        return b.finalScore-a.finalScore;
    });

    console.log(jsArray);

    localStorage.setItem('topfive', JSON.stringify(jsArray));
    // IF we already have localtorage
    // we need to GRAB the EXISTING DATA in localStorage

    // Once the new data is added --> Convert it back and WRITE it to the BROWSER

}

// Returns to the main menu from the HIGHSCORES table
goToMainMenuBtn.addEventListener('click',goToMain);
function goToMain() {
    startMenu.setAttribute("style","display:block");
    highScoresDisplay.setAttribute("style","display:none");
    gameOver.setAttribute("style","display:none");

}

//Checks to see if there are any more questions, terminates the game if not//
function setQuestion() {
console.log(questions[questionNumber]);
if (questions[questionNumber]===undefined) {
    console.log("Game Over!");
    app.setAttribute("style","display:none");
    quiz.setAttribute("style", "display:none");
    gameOver.setAttribute("style","display:block");
    timeLeft=0;
    console.log(score);
} else {
questionText.textContent=questions[questionNumber].title;
answerOne.textContent=questions[questionNumber].options[0];
answerTwo.textContent=questions[questionNumber].options[1];
answerThree.textContent=questions[questionNumber].options[2];
answerFour.textContent= questions[questionNumber].options[3];
}
}

//Starts the timer
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
        }
    }, 1000);
}

//Starts the game
function startGame(event) {
    console.log("Game Starting;");
    startTimer();
    startMenu.setAttribute("style", "display:none");
    highScoresDisplay.setAttribute("style","display:none");
    app.setAttribute("style", "display:block");
    quiz.setAttribute("style","display:block");
    setQuestion();
}


//Checks to see if the answer button you clicked matches the answer value
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
