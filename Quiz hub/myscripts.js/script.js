// select all the required elements //
var start_btn = document.querySelector(".start-btn button");
var info_box = document.querySelector(".info-box");
var exit_btn = info_box.querySelectorinfo_box(".buttons .quit");
var continue_btn = info_box.querySelector(".buttons .restart");
var quiz_box = document.querySelector("quiz-box");
var option_list = quiz_btn.querySelector(".option-list");
var result_box = document.querySelector(".result-box");
var time_line = document.querySelector("header .time-line")
var timeText = document.querySelector(".timer .time-left-txt");
var timeCount = document.querySelector(".timer .timer-sec");

// if startQuiz button clicked //
start_btn.onclick=()=> {
    info_box.classList.add("activeinfo"); // show info box
}



