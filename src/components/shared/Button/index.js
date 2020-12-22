import React from 'react'
import { Button } from './index.styles'
const Comp = ({
  icon,
  value,
  label,
  color = 'black',
  backgroundColor = 'white',
  borderColor,
  onChange = () => {}
}) => {
  return (
    <Button color={color} backgroundColor={backgroundColor} borderColor={borderColor} onClick={() => { onChange(value) }}>
      <p> {label} </p>
    </Button>
  )
}

export default Comp
