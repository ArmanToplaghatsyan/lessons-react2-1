import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import './store/reducer'
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, random, reset } from "./store/reducer1";
import { MyRouter } from "./component/MyRouter";

// function App() {
//   const data: number = useSelector((state: any) => state);
//   console.log(data);

//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       {/* <button onClick={() => dispatch({ type: "inc" })}>+</button>
//       <button onClick={() => dispatch({ type: "dec" })}>-</button> */}

//       <button onClick = {() => dispatch(inc())}>+</button>
//       <button onClick = {() => dispatch(dec())}>-</button>
//       <button onClick = {() => dispatch(random())}>?</button>
//       <button onClick = {() => dispatch(reset())}>&times;</button>
//     </div>
//   );
// }

function App (){
  return (
    <div>
      <MyRouter/>
    </div>
  )
}

export default App;
