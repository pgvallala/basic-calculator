const buttons = document.querySelectorAll(".num-button");
const allbuttons = document.querySelectorAll(".button");
const resultBox = document.querySelector("#result-box");
const clearBtn = document.querySelector("#clear");
const total = document.querySelector("#total");
const resetBtn = document.querySelector("#reset");

const btns = [...buttons];
const allBtns = [...allbuttons];

btns.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    let value = buttons[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

function evaluate(n) {
    return new Function('return ' + n)();
}

total.addEventListener('click', () => {
    let allInputs = resultBox.innerHTML;
    resultBox.innerHTML = evaluate(allInputs);
    console.log(evaluate(allInputs));
})

clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = "0";
})

resetBtn.addEventListener('click', () => {
    resultBox.innerHTML = "0"
})