const defaultState = {
    todos: [
        {
            id: 1211312312,
            title: "name",
            description: "this testing",
        }
    ]
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const isExist = state.todos.find(item => item.id == action.todo.id);
            const newTodo = isExist ? state.todos.map(item => {
                return item.id == action.todo.id ? { id: action.todo.id, title: action.todo.title, description: action.todo.description } : item
            }) : [...state.todos, action.todo];

            return {
                ...state,
                todos: newTodo
            }
        case 'DELETE_TODO':
            const updatadeTodo = state.todos.filter(item => item.id !== action.id)
            return {
                ...state,
                todos: updatadeTodo
            }
        default:
            return state;
    }
}

export default rootReducer;