
// import callApi from './api'
import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    listCategories: (categories, action) => {
      categories.push(action.payload)
    }
  }
})

export const { listCategories } = slice.actions
export default slice.reducer
