import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HomePageState } from './home.types'

const initialState: HomePageState ={
    roadmap:{},
    progress: 0,
    close: false
}

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
      setRoadmapProps(state, action: PayloadAction<string>) {
        state.roadmap = action.payload
      },
      setProgressBar(state, action: PayloadAction<number>) {
        state.progress = action.payload
      },
      setOnClose(state, action: PayloadAction<boolean>) {
        state.close = action.payload
      },
    },
  })

export const {name, actions, reducer} = homepageSlice