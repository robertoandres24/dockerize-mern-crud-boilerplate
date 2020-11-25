const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { todos: action.payload };
    case 'REMOVE':
      return {
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    case 'ADD':
      return {
        todos: [...state.todos, action.payload]
      };
    case 'UPDATE':
      return {
        todos: state.todos.map(t => {
          if (t._id == action.payload.id) {
            return {
              ...t,
              text: action.payload.text
            }
          }
          return t
        })
      };
    default:
      throw new Error('unknown action type');
  }
}

export default TodoReducer
