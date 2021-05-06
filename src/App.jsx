
import React, { useState } from 'react'
import { AddTodos } from './components/AddTodos';
import { Todos } from './components/Todos'

function App() {
  /* 
    todos:[{
      text:"",
      id:number
    },
    {

    }]

  */
  let [todos, setTodos] = useState([])
  
  return (
    <div className="container">
      <AddTodos todos={todos} setTodos={setTodos}/>

      <Todos todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
