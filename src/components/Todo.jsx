import React, { useEffect } from 'react'

export function Todo(props) {
  let todo = props.todo.todo
  
  let deleteHandler=(e)=>{
    e.preventDefault()
    // debugger
    props.setTodos(
      props.todos.filter((cTodo)=>{
        console.log("cTodo", cTodo);
        return cTodo.id !==props.todo.id 
      })
    )

  }

  

  let completeHandler=()=>{
    
  }
  return (
    <div className="col s7 offset-s2 ">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <p>{todo}</p>
          </div>
          <div className="card-action ">
            <a href="#" className="btn">Complete</a>
            <a href="#" className="right btn red" onClick={deleteHandler}>Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
}

