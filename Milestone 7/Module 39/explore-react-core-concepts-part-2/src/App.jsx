import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Locals from './Locals';
import Friends from "./Friends";


function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 is clicked");
  };
  const addToFive = (num)=>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concept Part 2</h3>

      <Friends></Friends>

      <Locals></Locals>

      {/* <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert("clickedd")}>Third</button>
      <button onClick={()=> addToFive(3)}>Fourth</button> */}
    </>
  );
}

export default App;
