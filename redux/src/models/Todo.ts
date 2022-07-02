/* eslint-disable no-unused-vars */
export type Todo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

export enum TodoActionsTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE'
}

type FetchAction = {
  type: TodoActionsTypes.FETCH_TODOS
}

type FetchSuccessAction = {
  type: TodoActionsTypes.FETCH_TODOS_SUCCESS
  payload: Todo[]
}

type FetchErrorAction = {
  type: TodoActionsTypes.FETCH_TODOS_ERROR
  payload: string
}

type SetTodoPageAction = {
  type: TodoActionsTypes.SET_TODO_PAGE
  payload: number
}

export type TodoAction = FetchAction | FetchSuccessAction | FetchErrorAction | SetTodoPageAction
