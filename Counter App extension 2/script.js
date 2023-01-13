let store = Redux.createStore(reducer);
let step = 1,
  maxValue = Infinity;
let counter = store.getState();

let h1 = document.querySelector("h1");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");
let fiveBtn = document.querySelector(".five");
let tenBtn = document.querySelector(".ten");
let fifteenBtn = document.querySelector(".fifteen");
let fifteenMaxBtn = document.querySelector(".fifteenMax");
let hundredBtn = document.querySelector(".hundred");
let twoHundredBtn = document.querySelector(".twoHundred");

h1.innerText = counter;

fifteenMaxBtn.addEventListener("click", () => {
  maxValue = 15;
});

hundredBtn.addEventListener("click", () => {
  maxValue = 100;
});

twoHundredBtn.addEventListener("click", () => {
  maxValue = 200;
});

fiveBtn.addEventListener("click", () => {
  step = 5;
});

tenBtn.addEventListener("click", () => {
  step = 10;
});

fifteenBtn.addEventListener("click", () => {
  step = 15;
});

incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});

resetBtn.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

store.subscribe(() => {
  counter = store.getState();
  h1.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + step <= maxValue ? state + step : state;
    case "decrement":
      return state - step >= 0 ? state - step : state;
    case "reset":
      return 0;
    default:
      return state;
  }
}
