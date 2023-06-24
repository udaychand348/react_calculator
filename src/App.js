import React, { useState } from 'react'
import Display from './Display';
const App = () => {
  const[task, NewTask] = useState("");
  const[todos,SetTodos]=useState([]);
  const changehandler = e =>
  {
    NewTask(e.target.value)
  }
  const submithandler = e =>
  {
    e.preventDefault();
    if(task.length<1)
    {
     alert("Add a Task"); 
    }
    else{
    const newTodos = [...todos,task.toLowerCase()];
    SetTodos(newTodos);
    NewTask("");
    }
  }
  const deletehandler = (indexvalue) =>
  {
    const newTodos = todos.filter((todo,index) => index!==indexvalue);
    SetTodos(newTodos);
  }
 
  return (
    <div>
      <center>
      <form onSubmit={submithandler}>
        <input text="" value={task} onChange={changehandler} /> &nbsp;
        <button style={{color:"red",backgroundColor:"yellow",border:"3px solid black"}}type="submit" name="Add" > Add </button>
        <br/>
      </form>
      <Display todos={todos}  deletehandler={deletehandler}/>
       </center>
    </div>
  )
}

export default App
