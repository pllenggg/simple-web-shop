import React from 'react'
import { limitString } from '../constants'
import { Card, Button, Counter } from '../shared'
import { ListOuter, QuantityOuter, PriceTag, TitleOuter, ProductDetails, Detail, Info } from './index.styles'
import { formatCurrency } from '../utils'

const List = ({
  items = [],
  cartPage,
  onAddToCart = () => {},
  onIncrement = () => {},
  onDecrement = () => {},
  onUpdateTotalCartPrice = () => {},
  onRemove = () => {}
}) => {
  const handleAddToCart = (value) => {
    const selectedItem = items.find(item => item.id === value)
    onAddToCart(selectedItem)
  }

  const getProductTotalPrice = (price, quantity) => {
    const totalPrice = parseInt(price) * quantity
    onUpdateTotalCartPrice(totalPrice)
    return formatCurrency(totalPrice)
  }
  return (
    <ListOuter>
      {
            items.map((item, index) => {
              const { name, price, stock, minQty, maxQty, quantity, shippingDay } = item
              const getLimitString = (key, value) => {
                if (parseInt(value) === 0) return
                const unit = value === 1 ? 'item' : 'items'
                return `${limitString[key].text} ${value} ${unit}`
              }

              return (
                <Card key={index}>
                  <div>
                    <TitleOuter>
                      <h2> {name} </h2>
                      <PriceTag> {formatCurrency(price)} </PriceTag>
                    </TitleOuter>
                    <ProductDetails>
                      <Detail> {stock} items available</Detail>
                      <Detail>{getLimitString('minQty', minQty)}</Detail>
                      <Detail>{getLimitString('maxQty', maxQty)}</Detail>
                      <Info>**This product will take {shippingDay} days to ship.</Info>
                    </ProductDetails>
                  </div>
                  <div>

                    {
                    cartPage &&
                      <QuantityOuter>
                        <Detail> quantity: {quantity} x {formatCurrency(price)}</Detail>
                        <Detail> total: {getProductTotalPrice(price, quantity)}</Detail>
                        <Counter
                          displayValue={parseInt(quantity)}
                          onIncrement={() => onIncrement(item)}
                          onDecrement={() => onDecrement(item)}
                        />
                      </QuantityOuter>
                    }
                    {cartPage
                      ? <Button
                          label='Remove'
                          value={item.id}
                          color='red'
                          backgroundColor='white'
                          borderColor='red'
                          onChange={() => onRemove(item)}
                        />
                      : <Button
                          label='Add to cart'
                          value={item.id}
                          color='#00D2B2'
                          backgroundColor='white'
                          borderColor='#00D2B2'
                          onChange={handleAddToCart}
                        />}
                  </div>
                </Card>

              )
            })
        }
    </ListOuter>
  )
}

export default List
