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
  console.log('What is the value in button: ', value)
  return (
    <Button color={color} backgroundColor={backgroundColor} borderColor={borderColor} onClick={() => { onChange(value) }}>
      <p> {label} </p>
    </Button>
  )
}

export default Comp
