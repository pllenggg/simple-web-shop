import React from 'react'
import { limitString } from './constants'
import { Card, Button } from './shared'
import { PriceTag, TitleOuter } from './List.styles'

const List = ({ items = [], onAddToCart = () => {} }) => {
  const handleAddToCart = (value) => {
    const selectedItem = items.find(item => item.id === value)
    onAddToCart(selectedItem)
  }
  return (
    <div>
      {
            items.map((item, index) => {
              const { name, price, stock, minQty, maxQty } = item
              const getLimitString = (key, value) => {
                if (parseInt(value) === 0) return
                const unit = value === 1 ? 'item' : 'items'
                return `${limitString[key].text} ${value} ${unit}`
              }

              const productPrice = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price)
              // const maximumQty = (maxQty === '0') ? stock : maxQty
              return (
                <Card key={index}>
                  <div>
                    <TitleOuter>
                      <h2> {name} </h2>
                      <PriceTag> {productPrice} </PriceTag>
                    </TitleOuter>
                    <p> {stock} available</p>
                    <p>{getLimitString('minQty', minQty)}</p>
                    <p>{getLimitString('maxQty', maxQty)}</p>
                  </div>
                  <div>
                    <Button
                      label='Add to Cart'
                      value={item.id}
                      color='#00D2B2'
                      backgroundColor='white'
                      borderColor='#00D2B2'
                      onChange={handleAddToCart}
                    />
                    {/* <Counter
                      maxQty={maximumQty}
                      onError={handleError}
                    /> */}
                  </div>
                </Card>

              )
            })
        }
    </div>
  )
}

export default List
