import React from 'react'
import { Todo } from './Todo'

export function Todos(props) {
  return (
    <div className="row">
      {props.todos.map((todo, x)=>{
        {/* console.log("TODO:", todo); */}
        return <Todo key={todo.id} idz={todo.id} todo={todo} setTodos={props.setTodos}  todos={props.todos}/>
      }
      )}
    </div>
  );
}

