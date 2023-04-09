// select all the required elements //
var start_btn = document.querySelector(".start-btn button");
var info_box = document.querySelector(".info-box");
var exit_btn = info_box.querySelector(".buttons .quit");
var continue_btn = info_box.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".quiz-box");
var option_list = quiz_box.querySelector(".option-list");
var result_box = document.querySelector(".result-box");
var time_line = document.querySelector("header .time-line")
var timeText = document.querySelector(".timer .time-left-txt");
var timeCount = document.querySelector(".timer .timer-sec");

// if startQuiz button clicked //
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); // show info box
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide info box
}
// if continued button clicked 
continue_btn.onclick =()=>{
    info_box.classList.remove("activeInfo"); // Remove the info box of the rules //
    quiz_box.classList.add("activeQuiz"); // Show quiz box 
    ShowQuestions(0); // calling show Questions function 
    queCounter(1); // passing 1 parameter to queConter 
    startTimer(15); // calling start timer function
    startTimerLine(0); // calling starttimerline function
    
}

var timeValue = 15;
var que_count = 0;
var que_numb = 1;
var userScore = 0;
var counter;
var counterLine;
var widthValue;


var restart_quiz= result_box.querySelector(".buttons .restart");
var quit_quiz= document.querySelector(".buttons .quit");

restart_quiz.onclick = ()=> {
    quiz_box.classList.add("activeQuiz"); // show quiz box
    result_box.classList.remove("activeResult"); // hide result box  
    var timeValue = 15;
    var que_count = 0;
    var que_numb = 1;
    var userScore = 0;
    var widthValue;
    ShowQuestions(que_count); // calling showQuestions function 
    queCounter(que_numb); // passing que_Numb value to queCounter
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    startTimer(timeValue); // start timer with value of 15 
    startTimerLine(widthValue); // calling start timer value line
    timeText.textContent = "Time Left"; // change the text to timeText to the time left
    next_btn.classList.remove("show"); // hide the NEXT btn

    


}






