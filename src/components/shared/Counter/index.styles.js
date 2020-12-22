import styled from 'styled-components'

export const QuantityInput = styled.input`
  width: 20px;
  margin: 0 5px;
  align-item: center;
  ::-webkit-inner-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
  }
  ::-webkit-outer-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
  }   

`

export const Quantity = styled.div`
  width: 20px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid green;
`

export const CounterOuter = styled.div`
  display: flex;
  height: 30px;
  padding: 10px;
`
