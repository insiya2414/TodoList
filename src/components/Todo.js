import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";


function Todo({ todo, toggleComplete, removeTodo }) {

function handleCheckboxClick(){
    toggleComplete(todo.id);
}

function handleRemoveClick(){
    removeTodo(todo.id);
}



  return (
    <ListItem style={{ display: "flex", flexDirection: "row", alignContent: "space-around" }}>
      {/* <input  */}
      <Checkbox
      checked={todo.completed}
    //   type="checkbox" 
      onClick={handleCheckboxClick}
      />
      {/* <li */}
      <Typography
      variant ="body1"
    
        style={{
        //   color: "white",
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
        {/* </li> */}
        </Typography>
      
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon/>
      </IconButton>
      </ListItem>
    // </div>
  );
}

export default Todo;
