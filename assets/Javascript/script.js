var start = document.getElementById('start-button');
var welcome = document.querySelector('.welcome');
var questionContainer = document.querySelector('.questions-container');


// EVENT to trigger game start
start.addEventListener('click', startGame);


function startGame(event) {
    console.log("Game Starting... ")
    // hide WELCOME CONTAINER
    welcome.classList.add('hide');
    // unhide QUESTIONS CONTAINER
    questionContainer.classList.remove('hide');

    // we also want to start a TIMER 
}


// Starting Page: Has the navbar, with a score, highscore (local storage), and timer elements. There is a large start button, with some explanation to the rules of the game below it// 




//The start button will be connected to an event listener. Once the start button is clicked, the "quiz" element will become visible, the start button and explanation will become hidden/removed from the DOM. Also, a timer will start from 80 seconds. 


//Put all of your questions into an array "Question-1", "Question-2", etc*. Then use the .split command so separate them. 

//Then, the first question wil become visible. It will have 4 answer buttons, each with an ID of correct or incorrect. There will be 2 more event listeners. Maybe use prevent default or stop propogation if things aren't working. The 2 event listeners are for either correct or incorrect responses.

//For correct responses, increase the score count by 1, then make the current question invisible, increase the question in the array by 1, and add the visible attribute to the new question//

//For incorrect questions, decrease the timer by 10 seconds, 


//Once the timer reaches 0 seconds or you finish all the questions, stop all activity however possible, and make a final screen appear with your score, a button to add to the HIGHSCORE list using a key.value pair, and a button to start the game again (using same function as the start button)

