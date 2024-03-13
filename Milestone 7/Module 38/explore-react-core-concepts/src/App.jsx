import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const singers = [
    { id: 1, name: "Dr. Mahfujur Rahman", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Shuvro deb", age: 58 },
    { id: 4, name: "Pritom ", age: 28 },
  ];
  const actors = ["Sakib", "Raj", "Joshim", "Rubel"];

  const books = [
    {
      id: 1,
      name: "Physics",
      price: 200,
    },
    {
      id: 2,
      name: "Chemistry",
      price: 400,
    },
    {
      id: 3,
      name: "Biology",
      price: 350,
    },
    {
      id: 4,
      name: "Math",
      price: 500,
    },
  ];

  return (
    <>
      <h3>Vite + React</h3>
<BookStore books={books}></BookStore>
      {/* {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={"Bappa Raj"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))} */}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="50"></Student>
      <Student grade="6" score="48"></Student>
      <Student grade="5" score="42"></Student>
      <Devleoper></Devleoper> */}
    </>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h2>
      This Device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 29;
  const money = 20;
  const person = { name: "nazib", profession: "developer" };
  return (
    <h3>
      I am {person.name} with Age: {age + money}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div>
      <h3>This is a Student</h3>
      <p>Grade: {grade} </p>
      <p>Score:{score} </p>
    </div>
  );
}

function Devleoper() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid purple",
        borderRadius: "20px",
      }}
    >
      <h5>Dev Dev</h5>
      <p>Coding:</p>
    </div>
  );
}

export default App;
