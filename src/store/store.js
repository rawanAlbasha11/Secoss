import { configureStore } from '@reduxjs/toolkit'
import lecturesReducer from './slices/lecturesSlice'
import newsReducer from './slices/newsSlice'
import boardReducer from './slices/boardSlice'
const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
     news: newsReducer,
     board: boardReducer,
  },
})

export default store
