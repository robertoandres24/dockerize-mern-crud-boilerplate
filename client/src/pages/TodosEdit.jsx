import React, { useState, useEffect, useContext } from "react";
import { TodoForm } from "../components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getTodo, updateTodo } from "../api";
import { TodoContext } from "../context/TodoContext";

const TodosEdit = () => {
  const match = useRouteMatch()
  const [todo, setTodo] = useState();
  const history = useHistory()

  const { setTodos } = useContext(TodoContext)

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id)
      setTodo(todo)
    }
    fetchTodo()
  }, []);

  const onSubmit = async (data) => {
    const { data: { id: idTodo } } = await updateTodo(match.params.id, data)
    setTodos((prevTodos) => {
      let foundIndex = prevTodos.findIndex(t => t._id == idTodo);
      prevTodos[foundIndex] = { ...prevTodos[foundIndex], text: data.text }
      return prevTodos
    })
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
