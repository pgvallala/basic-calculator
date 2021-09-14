const buttons = document.querySelectorAll(".num-button");
const allbuttons = document.querySelectorAll(".button");
const resultBox = document.querySelectorAll("#result-box");
const clearBtn = document.querySelectorAll("#clear");
const total = document.querySelectorAll("#total");

let btns = [...buttons];
let allBtns = [...allbuttons];

btns.forEach((button, i) => {
  button.addEventListener("click", () => {
    if ((resultBox.innerHTML = "0")) {
      resultBox.innerHTML = "";
    }
    let value = buttons[i].innerHTML;
    resultBox.innerHTML += value;
  });
});
