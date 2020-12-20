import React, { useState } from 'react'
import {
  QuantityInput
} from './index.styles'
import Button from '../Button'

const Counter = ({ value = 0 }) => {
  const [quantity, setQuantity] = useState(value)

  const handleChange = (e) => {
    const value = e.target.value
    setQuantity(value)
  }

  const handleClick = (value) => {
    setQuantity(quantity + value)
  }

  return (
    <div>
      <Button value='-' onClick={() => handleClick(-1)} />
      <QuantityInput
        type='number'
        value={quantity}
        onChange={handleChange}
      />
      <Button value='+' onClick={() => handleClick(1)} />
    </div>
  )
}

export default Counter
