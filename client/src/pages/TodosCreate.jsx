import React, { useContext } from "react";
import { TodoForm } from "../components";
import { createTodo } from "../api";
import { useHistory } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";




const TodosCreate = () => {
  const { setTodos } = useContext(TodoContext)
  const history = useHistory()

  const onSubmit = async (data) => {
    const { data: { todo } } = await createTodo(data)
    setTodos(prevTodos => [...prevTodos, todo])
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default TodosCreate
