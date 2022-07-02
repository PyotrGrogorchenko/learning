import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@src/models/User'
import { fetchUsers } from './actionCreators'

const initialState = {
  users: [] as User[],
  isLoading: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true
    // },
    // usersFetchingSuccess(state, action: PayloadAction<User[]>) {
    //   state.isLoading = false
    //   state.error = ''
    //   state.users = action.payload
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false
    //   state.error = action.payload
    // }
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const userReducer = userSlice.reducer
