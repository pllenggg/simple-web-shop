import React from 'react'
import { Button } from './index.styled'
const Comp = ({ value, color = 'white', onChange = () => {} }) => {
  return (
    <Button color={color} onClick={() => { onChange(value.id) }}>
      {value.name}
    </Button>
  )
}

export default Comp
