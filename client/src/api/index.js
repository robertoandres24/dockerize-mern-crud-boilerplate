import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const createTodo = payload => api.post(`/todo`, payload)
export const getTodos = () => api.get(`/todos`).then(res => res.data.data)
export const updateTodo = (id, payload) => api.put(`/todo/${id}`, payload)
export const deleteTodo = id => api.delete(`/todo/${id}`)
export const getTodo = id => api.get(`/todo/${id}`).then(res => res.data.data)

const apis = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  getTodo,
}

export default apis
