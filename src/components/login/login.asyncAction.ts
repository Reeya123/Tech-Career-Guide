import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../store'

export const login = createAsyncThunk(
  'auth/login',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const response = await axios
      .post("http://localhost:4000/auth/login", {
        email: state.login.email,
        password: state.login.password
      })
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data.accessToken));
    }
    return response.data
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    localStorage.removeItem("user");
  }
)

export const signup = createAsyncThunk(
  'auth/signup',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const response = await axios
      .post("http://localhost:4000/api/users", {
        name: state.login.name,
        email: state.login.email,
        password: state.login.password
      })
    return response.data
  }
)
