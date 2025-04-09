let questions = [
  {
    que: "Which of the following is markup language?",
    a: "HTML",
    b: "CSS",
    c: "Java Script",
    d: "Python",
    correct: "a",
  },
  {
    que: "What year was Java Script launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Python",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

let quesBox = document.getElementById("quesBox");
let optionInput = document.querySelectorAll(".options");
// let submitBtn = document.getElementById("btn");

const loadQuestions = () => {
  if (index === total){
    return endQuiz();
  }
  reset();
  let data = questions[index];
  quesBox.innerText = `${index + 1})${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  let data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestions();
  return;
};

const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `<h3>
    Thank You for playing the quiz!</h3>
    <h2>${right}/${total} are correct</h2>`;
};
loadQuestions();
