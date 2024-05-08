import {createStore} from 'redux'

const obj: any = {
  name: "",
  surname: "",
};

const reduces = (state = obj, action: any) => {
    state = {...state}

    switch (action.type) {
    case "anun":
      state.name = action.value;
      break;

    case "surname":
      state.surname = "Annyan";
      break;

    default:
      break;
  }

  return state;
};

const store = createStore(reduces)
console.log(store);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'anun', value: "Valod"})
store.dispatch({type: 'anun', value: "Vergush"})
store.dispatch({type: 'anun', value: "Esav"})
store.dispatch({type: 'anun', value: "Eprat"})
store.dispatch({type: 'anun', value: "Vaxinak"})
store.dispatch({type: 'anun', value: "Vazgen"})

store.dispatch({type: 'surname'})

// console.log(store.getState());



export {};

// console.log(reducer(obj, { type: "anun" }));
// console.log(reducer(obj, { type: "surname" }));

// console.log(obj);

