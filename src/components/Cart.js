import React from 'react'
import List from './List'
import { connect } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removedFromCart } from '../store/carts'
import { CartContainer } from './Cart.styles'
import { formatCurrency } from './utils'

const Cart = (props) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removedFromCart
  } = props

  const handleIncrement = (item) => {
    return increaseQuantity(item)
  }

  const handleDecrement = (item) => {
    return decreaseQuantity(item)
  }

  const handleRemoveItem = (item) => {
    return removedFromCart(item)
  }

  const calculateTotalCartPrice = () => {
    const arrayOfPrice = cartItems.map(item => {
      const { price, quantity } = item
      return parseFloat(price) * parseInt(quantity)
    })
    return formatCurrency(arrayOfPrice.reduce((a, b) => a + b, 0))
  }

  return (
    <CartContainer>
      {cartItems.length === 0
        ? <div> Your cart is empty </div>
        : <div>
          <List
            items={cartItems}
            cartPage
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemoveItem}
          />
          <p>totalCarts: {calculateTotalCartPrice()}</p>
          </div>}

    </CartContainer>
  )
}
// products: state.entities.products

const mapStateToProps = state => ({
  cartItems: state.entities.carts
})

const mapDispatchToProps = (dispatch) => ({
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
  removedFromCart: (item) => dispatch(removedFromCart(item))
})

// take 2 args
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
