import "./index.css";
import { useState, useEffect } from "react";

const Task = ({ todos }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };
  const boxStyle = {
    width: "30px",
    height: "30px",
    margin:"12px",
    borderRadius: "100%",
  backgroundColor: todos?.isDone ? "#0fc006":"red",

  };

  return (
    <div className="Task">
      <img src={todos?.userImg} alt="" className="Task__Img" />
      <h4 className="Task__User">{todos?.user}</h4>
      <p className="Task__Todo">TO-DO: {todos?.toDo}</p>
      <p> category: {todos?.category}</p>
      <div value={todos.isDone} style={boxStyle} onClick={handleCheckChange}></div>
    </div>
  );
};
export default Task;
