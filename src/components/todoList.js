import React from "react";
import Todo from "./todo";


const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map(todo => (
                <Todo text={todo.text}  key ={todo.id} setTodos={setTodos} todo={todo} todos ={todos}/>
            ))}
        </div>
    );
}

export default TodoList;