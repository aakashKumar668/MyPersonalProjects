let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let turnO = true;

// 2D Arrays

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableboxes();
  msgContainer.classList.add(".hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO) {
      //player O
      box.innerText = "O";
      box.style.color = "red"
      turnO = false;
    } else {
      //player X
      box.innerText = "X";
      box.style.color= "green"
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation,The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        //console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
