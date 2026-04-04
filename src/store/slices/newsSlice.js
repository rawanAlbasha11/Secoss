import { createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
import { newsData } from '../../data/news'



const initialFilters = {
  type: '',
  year: '',
  search: '',
}

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: newsData, // ✅ مباشرة
    filters: initialFilters,
  },

  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload
      state.filters[key] = value
    },

    clearFilters: (state) => {
      state.filters = initialFilters
    },
  },
})

export const { setFilter, clearFilters } = newsSlice.actions
export default newsSlice.reducer