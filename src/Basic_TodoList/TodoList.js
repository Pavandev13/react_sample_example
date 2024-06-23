import React from "react";
import "./styles.css";

const TodoList = ({ todolist, deletehandler }) => {
  return (
    <div className="todo-list">
      {todolist.map((todoss, index) => (
        <div key={index}>
          <h3 className="todo-box">
            {todoss}
            <button
              onClick={() => deletehandler(index)}
              className="button-delete"
            >
              delete
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
