import React, { useState } from 'react'
import M from 'materialize-css'
export function AddTodos(props) {
  let [todo, setTodo] = useState('11')
  let todos = props.todos
  let changeHandler= (e)=>{
    setTodo(e.target.value)
  }
  let btnHandler = (e)=>{
    e.preventDefault()
    if(todo==''){
      M.toast({html:"Fill the input"})
      return
    }
    props.setTodos([...todos,{
      todo,
      id: todos.length ? todos[todos.length-1].id+1 : 1
    }])
    setTodo("")
    console.log(todos);

  }
  return (
    <div className="container row">
      <div className="input-field col s6 offset-s2">
          <input placeholder="add todo" id="todo" type="text" className="validate" value={todo} onChange={changeHandler}/>
          <label htmlFor="todo">Add Todos</label>
          
          <a className="waves-effect waves-light btn" href="" onClick={btnHandler}>button</a>
      </div>
      
    </div>
  );
}

