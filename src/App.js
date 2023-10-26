//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("initial storageTodos", storageTodos);
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length && !remove) {
      console.log("todos", Object.values(todos[0]));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
    if (remove) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
      setRemove(false);
    }
  }, [todos, remove]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id){
    console.log('inside remove todo');
    setTodos(todos.filter(todo => todo.id !== id));
    setRemove(true);
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Typography style={{ padding: 16 }}variant ="h1">
        React Todo
        </Typography>
        {/* <p>React Todo</p> */}
        <TodoForm addTodo={addTodo} />
        <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo} 
        />
      {/* </header> */}
    </div>
  );
}

export default App;
