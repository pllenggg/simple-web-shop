import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    addedToCart: (carts, action) => {
      const inCartItemIndex = carts.findIndex(item => item.id === action.payload.id)
      if (inCartItemIndex !== -1) {
        carts[inCartItemIndex].quantity++
      } else {
        const { minQty, ...rest } = action.payload
        const newItem = {
          ...rest,
          minQty,
          quantity: minQty
        }
        carts.push(newItem)
      }
      return carts
    },
    removedFromCart: (carts, action) => {
      const removedItemId = action.payload.id
      const newItemList = carts.filter(cartItem => removedItemId !== cartItem.id)
      carts = newItemList
      return carts
    },
    increaseQuantity: (carts, action) => {
      const inCartItemIndex = carts.findIndex(item => item.id === action.payload.id)
      const item = carts[inCartItemIndex]
      const maxQuantity = item.maxQty === '0' ? item.stock : item.maxQty
      const itemQuantity = parseInt(item.quantity)

      if (itemQuantity + 1 > parseInt(maxQuantity)) return

      item.quantity++
      return carts
    },
    decreaseQuantity: (carts, action) => {
      const inCartItemIndex = carts.findIndex(item => item.id === action.payload.id)
      const itemQuantity = parseInt(carts[inCartItemIndex].quantity)
      console.log('itemquantity: ', itemQuantity)
      const minQuantity = parseInt(carts[inCartItemIndex].minQty)
      console.log('minQuantity: ', minQuantity)

      if (itemQuantity > minQuantity) {
        carts[inCartItemIndex].quantity--
      }
      return carts
    }
  }
})

export const {
  addedToCart,
  removedFromCart,
  increaseQuantity,
  decreaseQuantity,
  getCartQuantity,
  listCartItems
} = slice.actions

export default slice.reducer
