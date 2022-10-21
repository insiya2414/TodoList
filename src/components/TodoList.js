import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList( { todos, toggleComplete, removeTodo } ){

    return (
        // <ul>
        <List>
            {todos.map(todo => (
                <Todo 
                key ={todo.id} 
                todo={todo} 
                toggleComplete= {toggleComplete}
                removeTodo={removeTodo}
                />
            ))}
            </List>
        // </ul>
    );
}


export default TodoList;