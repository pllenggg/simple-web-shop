import React from 'react'
import List from './List'
import { connect } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removedFromCart } from '../store/carts'
import { CartContainer, PageTitle } from './Cart.styles'
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

  return (
    <CartContainer>
      {cartItems.length === 0
        ? <div> Your cart is empty </div>
        : <CartList
            items={cartItems}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemoveItem}
          />}

    </CartContainer>
  )
}
// products: state.entities.products

const CartList = ({
  items,
  onIncrement,
  onDecrement,
  onRemove
}) => {
  const calculateTotalCartPrice = () => {
    const arrayOfPrice = items.map(item => {
      const { price, quantity } = item
      return parseFloat(price) * parseInt(quantity)
    })
    return formatCurrency(arrayOfPrice.reduce((a, b) => a + b, 0))
  }

  const calculateDeliveryDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + (2 + 7 - date.getDay()) % 7)
    return date.toDateString()
  }

  const calculateArrivalDate = (items) => {
    console.log('items: ', items)
    const longestShippingDayItem = [...items].sort((a, b) => b.shippingDay - a.shippingDay)
    console.log('longestShippingDayItem', longestShippingDayItem)
    let startDate = calculateDeliveryDate()
    startDate = new Date(startDate.replace(/-/g, '/'))
    let endDate = ''
    let count = 0
    while (count < parseInt(longestShippingDayItem[0].shippingDay)) {
      endDate = new Date(startDate.setDate(startDate.getDate() + 1))
      if (endDate.getDay() !== 0 && endDate.getDay() !== 6) {
        count++
      }
    }
    console.log('endDate: ', endDate)
    return endDate.toDateString()
  }

  return (
    <div>
      <PageTitle> Your Cart </PageTitle>
      <List
        items={items}
        cartPage
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
      />
      <p>totalCarts: {calculateTotalCartPrice()}</p>
      <p>Delivery date: {calculateDeliveryDate()}</p>
      <p>Estimated arrival date: {calculateArrivalDate(items)}</p>

    </div>
  )
}

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
