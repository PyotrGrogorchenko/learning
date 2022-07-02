import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@src/models/User'
import axios from 'axios'
// import { AppDispatch } from '../index'
// import { userSlice } from './userSlice'

// export const fetchUsers = () => async (dispatch: AppDispatch) =>{
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError((e as Error).message))
//   }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async () => {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    }
)

