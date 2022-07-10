import axios from 'axios'
import { Dispatch } from 'redux'

import { TodoAction, TodoActionsTypes } from '@src/models/Todo'

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS
      })
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit
        }
      })
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
        payload: res.data
      })
    } catch (e) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: 'Loading error!' })
    }
  }
}

export const setTodoPage = (page = 1): TodoAction => {
  return {
    type: TodoActionsTypes.SET_TODO_PAGE,
    payload: page
  }
}
