import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      // return { todos: state.todos.concat({...action.payload, id: uuid()}) };

      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) }
    // return state
    default:
      return state;
  }
}
// 