import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
import { lectures as localLectures } from '../../data/lectures'

export const fetchLectures = createAsyncThunk(
  'lectures/fetchLectures',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/lectures')
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

const initialFilters = {
  speaker: '',
  category: '',
  subCategory: '',
  year: '',
  search: '',
}

const lecturesSlice = createSlice({
  name: 'lectures',
  initialState: {
    items: localLectures,
    status: 'idle',
    error: null,
    filters: initialFilters, // 🔥 إضافة
  },
  reducers: {
    setLectures: (state, action) => {
      state.items = action.payload
    },

    setFilter: (state, action) => {
      const { key, value } = action.payload
      state.filters[key] = value
    },

    clearFilters: (state) => {
      state.filters = initialFilters
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLectures.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchLectures.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchLectures.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { setLectures, setFilter, clearFilters } = lecturesSlice.actions
export default lecturesSlice.reducer