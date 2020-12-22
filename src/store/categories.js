
// import callApi from './api'
import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'
const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    recieved: (categories, action) => {
      categories = action.payload
      return categories
    }
  }
})

export const { recieved } = slice.actions
export default slice.reducer

const url = '/uploads/1/1/8/2/118296037/categories.json'

// action creator

// we cando something like
// if we want to get the current state, we need to return fucntion
// with thunk middlewatre, we can recieved t
// export const loadProductsWithCach = () => (dispatch, getState) => {
//     // some logic
// }
export const loadCategories = () => apiCallBegan({
  url,
  onSuccess: recieved.type
})
