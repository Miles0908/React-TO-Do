import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: todos.length + 1,
      user: "Mr.Wolf",
      toDo: taskText,
      userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1mO6fgaty3nQ2ubv2-6guOwr-qWujQgDIQ&usqp=CAU",
      category: "General",
      isDone: true,
    };

    setTodos([...todos, newTask]);
  };

  useEffect(() => {
    fetch("https://api.npoint.io/90ea8d3d205a9c721e1d")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <>
      <TaskForm addTask={addTask} />
      <div>
        <TaskList todos={todos} />
      </div>
    </>
  );
}

export default App;
