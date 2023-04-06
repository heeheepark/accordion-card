let questionArea = document.getElementsByClassName('question-area');
let questionText = document.getElementsByClassName('question');
let question = document.querySelectorAll('li');
let answer = document.getElementsByClassName('answer');
let img = document.querySelectorAll('li img');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    questionArea[i].classList.toggle("clicked");
    inspector();
    })
  }

function inspector() {
  for(let i = 0; i < questionArea.length; i++) {
    if(questionArea[i].className.includes('click')) {
      questionText[i].style.fontWeight = "700";
      answer[i].style.display = "block";
      img[i].style.transform = "scaleY(-1)";

    } else {
      questionText[i].style.fontWeight = "400";
      answer[i].style.display = "none";
      img[i].style.transform = "none";
    }
  } 
}
