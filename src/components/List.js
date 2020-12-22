import React from 'react'
import { limitString } from './constants'
import { Card, Button, Counter } from './shared'
import { PriceTag, TitleOuter } from './List.styles'
import { formatCurrency } from './utils'

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
    <div>
      {
            items.map((item, index) => {
              console.log('itemin list: ', item)
              const { name, price, stock, minQty, maxQty, quantity } = item
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
                    <p> {stock} available</p>
                    <p>{getLimitString('minQty', minQty)}</p>
                    <p>{getLimitString('maxQty', maxQty)}</p>
                  </div>
                  <div>
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
                          label='Add to Cart'
                          value={item.id}
                          color='#00D2B2'
                          backgroundColor='white'
                          borderColor='#00D2B2'
                          onChange={handleAddToCart}
                        />}
                    {
                    cartPage &&
                      <div>
                        <div>
                          total: {getProductTotalPrice(price, quantity)}
                        </div>
                        <Counter
                          displayValue={parseInt(quantity)}
                          onIncrement={() => onIncrement(item)}
                          onDecrement={() => onDecrement(item)}
                        />
                      </div>
                    }
                  </div>
                </Card>

              )
            })
        }
    </div>
  )
}

export default List
