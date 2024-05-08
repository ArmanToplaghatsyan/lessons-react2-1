import { createStore } from "redux";

const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "random":
      return state + action.value;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export const MyStore = createStore(reducer);

export const inc = () => {
  return { type: "inc" };
};

export const dec = () => {
  return { type: "dec" };
};

export const random = () => {
  const value = Math.floor(Math.random() * 20 - 10);
  return { type: "random", value };
};

export const reset = () => {
  return { type: "reset" };
};
