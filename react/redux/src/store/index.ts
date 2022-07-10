import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { todoReducer } from './reducers/todoReducer'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
