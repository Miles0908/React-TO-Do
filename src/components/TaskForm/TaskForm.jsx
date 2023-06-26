import "./index.css"
import { useState } from "react"

const TaskForm = ({addTask})=>{
  const [taskText, setTaskText]= useState("")
  const handleInput=(e)=>{
    setTaskText(e.target.value)
  
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (taskText.trim()!==""){
      addTask(taskText);
      setTaskText("")
    }
    
  }
    return ( 
      <div className="TopBar">
        <img src="https://img.icons8.com/?size=512&id=114426&format=png" alt="logo img" />
       <form className="Task__Form" onSubmit={handleSubmit} >
        <input type="text" placeholder="Add a new TO-DO..."
        value={taskText} onChange={handleInput} />
        <button type="submit">Add</button>

       </form>
       </div>
    )
}
export default TaskForm