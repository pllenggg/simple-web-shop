import styled from 'styled-components'

export const Button = styled.button(({ backgroundColor, color, borderColor }) => ({
  background: backgroundColor,
  textDecoration: 'none',
  color,
  border: `1px solid ${borderColor || backgroundColor}`,
  borderRadius: '10px',
  cursor: 'pointer'
}))

export const ButtonContainer = styled.button`
  display: 'inline-flex';
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-radius: 5px;
  padding: 5px;
  margin: 0 10px;
`
