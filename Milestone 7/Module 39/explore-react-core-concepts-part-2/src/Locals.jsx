import { useEffect, useState } from "react";
import Users from "./Locals";

export default function Locals() {
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setLocals(data));
  }, []);
  return (
    <div>
      <h3>Users: {locals.length}</h3>
    </div>
  );
}

/*
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 *3 . use fetch to load data
 */
