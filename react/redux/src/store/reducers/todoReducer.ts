import { Todo, TodoAction, TodoActionsTypes } from '@src/models/Todo'

const initialState = {
  todos: [] as Todo[],
  isLoading: false,
  error: '',
  page: 1,
  limit: 10
}

export const todoReducer = (state = initialState, action: TodoAction): typeof initialState => {
  switch (action.type) {
    case TodoActionsTypes.FETCH_TODOS:
      return { ...state, isLoading: true, error: '' }
    case TodoActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case TodoActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, isLoading: false, error: '', todos: action.payload }
    case TodoActionsTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
