import "./styles.css";
import { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangehandler = (e) => {
    setTask(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };

  const onDeletehandler = (indexvalue) => {
    const newtodo = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newtodo);
  };

  return (
    <div className="App">
      <div className="todolist-title">Todolist Management App</div>
      <form onSubmit={submithandler}>
        <input
          type="text"
          value={task}
          className="form-input"
          onChange={onChangehandler}
        />
        <input type="submit" name="Add" className="form-button" value="Add" />
      </form>
      <TodoList todolist={todos} deletehandler={onDeletehandler} />
    </div>
  );
}
