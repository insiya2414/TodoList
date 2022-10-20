import React from "react";


function Todo({ todo }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignContent: "space-around" }}>
      <input type="checkbox" />
      <div
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </div>
      <button></button>
    </div>
  );
}

export default Todo;
