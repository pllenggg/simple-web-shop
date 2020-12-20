import styled from 'styled-components'

export const Button = styled.button(({ color }) => ({
  background: color,
  border: `1px solid ${color}`,
  cursor: 'pointer'
}))
