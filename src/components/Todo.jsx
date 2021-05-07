import React, { useRef } from 'react'

export function Todo(props) {
  const contentRef = useRef(null)
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

  

  let completeHandler=(e)=>{
    e.preventDefault()
    let d = contentRef.current.style.textDecoration
    contentRef.current.style.textDecoration = d ? "" : "line-through"

  }
  return (
    <div className="col s7 offset-s2 ">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content" ref={contentRef}>
            <p>{todo}</p>
          </div>
          <div className="card-action ">
            <a href="#" className="btn" onClick={completeHandler}>Complete</a>
            <a href="#" className="right btn red" onClick={deleteHandler}>Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
}

