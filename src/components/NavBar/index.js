import React from 'react'
import { Outer, LinkOuter, NavBarInner, Title } from './index.styles'

const NavBar = () => {
  return (
    <Outer>
      <NavBarInner>
        <LinkOuter to='/'> <Title>Products</Title> </LinkOuter>
        <LinkOuter to='/cart'> <Title>Cart</Title></LinkOuter>
      </NavBarInner>

    </Outer>
  )
}

export default NavBar
