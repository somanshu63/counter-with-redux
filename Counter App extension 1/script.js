let store = Redux.createStore(reducer);
var step;
let counter = store.getState();

let h1 = document.querySelector("h1");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");
let fiveBtn = document.querySelector(".five");
let tenBtn = document.querySelector(".ten");
let fifteenBtn = document.querySelector(".fifteen");

h1.innerText = counter;

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
  action.step = step;
  switch (action.type) {
    case "increment":
      return state + (action.step || 1);
    case "decrement":
      return state - (action.step || 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}
