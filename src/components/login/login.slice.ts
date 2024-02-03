import { LoginState } from "./login.types";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { login } from "./login.asyncAction";

const initialState: LoginState ={
    name:'',
    email:'',
    password: '',
    accessToken: '',
    islogin: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setUsername(state, action: PayloadAction<string>) {
        state.name = action.payload
      },
      setEmail(state, action: PayloadAction<string>) {
        state.email = action.payload
      },
      setPassword(state, action: PayloadAction<string>) {
        state.password = action.payload
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.fulfilled, (state, action) => {
          // action is inferred correctly here if using TS
          console.log(action.payload)
          state.accessToken = action.payload.accessToken;
          state.islogin = true
          state.name = action.payload.user.name
        });
      }
  })

export const {name, actions, reducer} = loginSlice