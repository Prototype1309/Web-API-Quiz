
function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
        document.getElementById('answer-11').style.border = '3px solid red'
        document.getElementById('result-11').style.color = 'red'
        document.getElementById('result-11').innerHTML = 'Incorrect'
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('answer-12').style.border = '3px solid limegreen'
        document.getElementById('result-12').style.color = 'limegreen'
        document.getElementById('result-12').innerHTML = 'correct!'
        showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('answer-13').style.border = '3px solid red'
        document.getElementById('result-13').style.color = 'red'
        document.getElementById('result-13').innerHTML = 'Incorrect!'
        showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('answer-14').style.border = '3px solid red'
        document.getElementById('result-14').style.color = 'red'
        document.getElementById('result-14').innerHTML = 'Incorrect!'
        showCorrectAnswer1()
    }
}

function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer2.addEventListener('click', () => {
        document.getElementById('answer-12').style.border = '3px solid limegreen'
        document.getElementById('result-12').style.color = 'limegreen'
        document.getElementById('result-12').innerHTML = 'Correct!'
        document.getElementById('showanswer1').removeChild(showAnswer1)
    })
}


function displayAnswer2() {
    if (document.getElementById('option-21').checked) {
        document.getElementById('answer-21').style.border = '3px solid red'
        document.getElementById('result-21').style.color = 'red'
        document.getElementById('result-21').innerHTML = 'Incorrect'
    }
    if (document.getElementById('option-22').checked) {
        document.getElementById('answer-22').style.border = '3px solid limegreen'
        document.getElementById('result-22').style.color = 'limegreen'
        document.getElementById('result-22').innerHTML = 'correct!'
        showCorrectAnswer2()
    }
    if (document.getElementById('option-23').checked) {
        document.getElementById('answer-23').style.border = '3px solid red'
        document.getElementById('result-23').style.color = 'red'
        document.getElementById('result-23').innerHTML = 'Incorrect!'
        showCorrectAnswer2()
    }
    if (document.getElementById('option-24').checked) {
        document.getElementById('answer-24').style.border = '3px solid red'
        document.getElementById('result-24').style.color = 'red'
        document.getElementById('result-24').innerHTML = 'Incorrect!'
        showCorrectAnswer2()
    }
}

function showCorrectAnswer2() {
    let showanswer2 = document.createElement('p')
    showAnswer2.innerHTML = 'Show Corrent Answer'
    showAnswer2.style.position = 'relative'
    showAnswer2.style.top = '-180px'
    showAnswer2.style.fontSize = '1.75rem'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer2.addEventListener('click', () => {
        document.getElementById('answer-22').style.border = '3px solid limegreen'
        document.getElementById('result-22').style.color = 'limegreen'
        document.getElementById('result-22').innerHTML = 'Correct!'
        document.getElementById('showanswer2').removeChild(showAnswer2)
    })
}


function displayAnswer3() {
    if (document.getElementById('option-31').checked) {
        document.getElementById('answer-31').style.border = '3px solid limegreen'
        document.getElementById('result-31').style.color = 'limegreen'
        document.getElementById('result-31').innerHTML = 'correct'
    }
    if (document.getElementById('option-32').checked) {
        document.getElementById('answer-32').style.border = '3px solid red'
        document.getElementById('result-32').style.color = 'red'
        document.getElementById('result-32').innerHTML = 'Incorrect!'
        showCorrectAnswer3()
    }
    if (document.getElementById('option-33').checked) {
        document.getElementById('answer-33').style.border = '3px solid red'
        document.getElementById('result-33').style.color = 'red'
        document.getElementById('result-33').innerHTML = 'Incorrect!'
        showCorrectAnswer3()
    }
    if (document.getElementById('option-34').checked) {
        document.getElementById('answer-34').style.border = '3px solid red'
        document.getElementById('result-34').style.color = 'red'
        document.getElementById('result-34').innerHTML = 'Incorrect!'
        showCorrectAnswer3()
    }
}

function showCorrectAnswer3() {
    let showanswer3 = document.createElement('p')
    showAnswer3.innerHTML = 'Show Corrent Answer'
    showAnswer3.style.position = 'relative'
    showAnswer3.style.top = '-180px'
    showAnswer3.style.fontSize = '1.75rem'
    document.getElementById('showanswer3').appendChild(showAnswer2)
    showAnswer3.addEventListener('click', () => {
        document.getElementById('answer-31').style.border = '3px solid limegreen'
        document.getElementById('result-31').style.color = 'limegreen'
        document.getElementById('result-31').innerHTML = 'Correct!'
        document.getElementById('showanswer3').removeChild(showAnswer2)
    })
}


function displayAnswer4() {
    if (document.getElementById('option-41').checked) {
        document.getElementById('answer-41').style.border = '3px solid red'
        document.getElementById('result-41').style.color = 'red'
        document.getElementById('result-41').innerHTML = 'Incorrect'
        showCorrectAnswer4()
    }
    if (document.getElementById('option-42').checked) {
        document.getElementById('answer-42').style.border = '3px solid red'
        document.getElementById('result-42').style.color = 'red'
        document.getElementById('result-42').innerHTML = 'Incorrect!'
        showCorrectAnswer4()
    }
    if (document.getElementById('option-43').checked) {
        document.getElementById('answer-43').style.border = '3px solid red'
        document.getElementById('result-43').style.color = 'red'
        document.getElementById('result-43').innerHTML = 'Incorrect!'
        showCorrectAnswer4()
    }
    if (document.getElementById('option-44').checked) {
        document.getElementById('answer-44').style.border = '3px solid limegreen'
        document.getElementById('result-44').style.color = 'limegreen'
        document.getElementById('result-44').innerHTML = 'correct!'
        
    }
}

function showCorrectAnswer4() {
    showAnswer4.innerHTML = 'Show Corrent Answer'
    showAnswer4.style.position = 'relative'
    showAnswer4.style.top = '-180px'
    showanswer4.style.fontSize = '1.75rem'
    document.getElementById('showanswer4').appendChild(showAnswer4)
    showAnswer4.addEventListener('click', () => {
        document.getElementById('answer-44').style.border = '3px solid limegreen'
        document.getElementById('result-44').style.color = 'limegreen'
        document.getElementById('result-44').innerHTML = 'Correct!'
        document.getElementById('showanswer4').removeChild(showAnswer4)
    })
}
function displayAnswer5() {
    if (document.getElementById('option-51').checked) {
        document.getElementById('answer-51').style.border = '3px solid red'
        document.getElementById('result-51').style.color = 'red'
        document.getElementById('result-51').innerHTML = 'Incorrect'
        showCorrectAnswer5()
    }
    if (document.getElementById('option-52').checked) {
        document.getElementById('answer-52').style.border = '3px solid red'
        document.getElementById('result-52').style.color = 'red'
        document.getElementById('result-52').innerHTML = 'Incorrect!'
        showCorrectAnswer5()
    }
    if (document.getElementById('option-53').checked) {
        document.getElementById('answer-53').style.border = '3px solid red'
        document.getElementById('result-53').style.color = 'red'
        document.getElementById('result-53').innerHTML = 'Incorrect!'
        showCorrectAnswer5()
    }
    if (document.getElementById('option-54').checked) {
        document.getElementById('answer-54').style.border = '3px solid limegreen'
        document.getElementById('result-54').style.color = 'limegreen'
        document.getElementById('result-54').innerHTML = 'correct!'
        
    }
}

function showCorrectAnswer5() {
    let showanswer5 = document.createElement('p')
    showanswer5.innerHTML = 'Show Corrent Answer'
    showanswer5.style.position = 'relative'
    showanswer5.style.top = '-180px'
    showanswer5.style.fontSize = '1.75rem'
    document.getElementById('showanswer4').appendChild(showAnswer4)
    showanswer5.addEventListener('click', () => {
        document.getElementById('answer-54').style.border = '3px solid limegreen'
        document.getElementById('result-54').style.color = 'limegreen'
        document.getElementById('result-54').innerHTML = 'Correct!'
        document.getElementById('showanswer4').removeChild(showAnswer4)
    })
}

// $ ("#button").click(function()
// {
//     $(".quiz_head").css('display','none');
    
// })

// var button = document.getElementById('button'); // Assumes element with id='button'

// button.onclick = function() {
//     var div = document.getElementsId('button');
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//         div.style.display = 'block';
//     }
// };

    var count = 30;
    var interval = setInterval(function(){
  document.getElementById('seconds').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('seconds').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

