
import React from 'react'
import { Quantity, CounterOuter, Clicker } from './index.styles'

const Counter = ({ displayValue = 0, onIncrement, onDecrement }) => {
  return (
    <CounterOuter>
      <Clicker
        onClick={onDecrement}
        backgroundColor='#00D2B2'
      > -
      </Clicker>

      <Quantity>
        <p>{displayValue}</p>
      </Quantity>

      <Clicker
        label='+'
        onClick={onIncrement}
        backgroundColor='#00D2B2'
      > +
      </Clicker>
    </CounterOuter>
  )
}

export default Counter
