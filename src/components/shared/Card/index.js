import React from 'react'
import { Outer } from './index.styles'

const Card = ({ children }) => {
  return (
    <Outer>
      {children}
    </Outer>
  )
}

export default Card
