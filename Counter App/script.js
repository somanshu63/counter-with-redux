let store = Redux.createStore(reducer);

let counter = store.getState();

let h1 = document.querySelector("h1");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");

h1.innerText = counter;

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
      return state + (action.step || 1);
    case "decrement":
      return state - (action.step || 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}
