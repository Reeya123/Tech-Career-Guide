import { configureStore } from '@reduxjs/toolkit'
import { homepageSlice } from './components/home/home.slice'
import { loginSlice } from './components/login/login.slice'

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    homepage: homepageSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch