import React from 'react'
import { Outer, LinkOuter } from './NavBar.styles'
import { Button } from './shared'
import cartIcon from '../public/images/add-to-cart.png'
const NavBar = () => {
  return (
    <Outer>
      <div styles={{ display: 'flex', paddingLeft: '10px' }}>
        <LinkOuter to='/'> Products </LinkOuter>
        <LinkOuter to='/cart'> My Cart</LinkOuter>
      </div>

    </Outer>
  )
}

export default NavBar
