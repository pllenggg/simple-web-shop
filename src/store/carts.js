import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    addedToCart: (carts, action) => {
      // if the added products are already in cart, then increase the quantity
      carts.forEach((item, index) => {
        // the same product is added, add more quantity
        if (item.id === action.payload.id) {
          carts[index].quantity++
        }
      })

      // if the cart is empty, added the minimum quantity to the cart first
      const { minQty, ...rest } = action.payload
      const newItem = {
        rest,
        quantity: minQty
      }
      carts.push(newItem)
    },
    removedFromCart: (carts, action) => {
      const removedItemId = action.payload.id
      const newItemList = carts.filter(cartItem => removedItemId !== cartItem.id)
      carts = newItemList
    },
    increaseQuantity: (carts, action) => {
      carts[action.payload].quantity++
      return carts
    },
    decreaseQuantity: (carts, action) => {
      const itemQuantity = carts[action.payload].quantity
      if (itemQuantity > 1) {
        carts[action.payload].quantity--
      }
      return carts
    },
    getCartQuantity: (carts) => {
      return carts.length
    }
  }
})

export const {
  addedToCart,
  removedFromCart,
  increaseQuantity,
  decreaseQuantity,
  getCartQuantity
} = slice.actions

export default slice.reducer
