import React, { useState, useEffect } from "react";
import { TodoForm } from "../components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getTodo, updateTodo } from "../api";
import { TodoContext } from "../context/TodoContext";

const TodosEdit = () => {
  const match = useRouteMatch()
  const [todo, setTodo] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id)
      setTodo(todo)
    }
    fetchTodo()
  }, []);

  const onSubmit = async (data) => {
    await updateTodo(match.params.id, data)
    history.push("/")
  }

  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
        <TodoForm todo={todo} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
      <div>Loading...</div>
    );
};

export default TodosEdit
