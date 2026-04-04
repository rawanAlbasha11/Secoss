// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
    loadUserFromStorage: (state) => {
      const token = localStorage.getItem('token')
      if (token) state.token = token
    },
  },
})

export const { setUser, logout, loadUserFromStorage } = userSlice.actions
export default userSlice.reducer