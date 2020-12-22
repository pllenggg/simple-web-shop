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
display: flex;
align-items: center;
justify-content: center;
  width: 20px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  border: 0.5px solid #00D2B2;
  margin: 0 5px;
  padding: 2px;
`

export const CounterOuter = styled.div`
  display: flex;
  height: 30px;
  padding: 10px;
  margin: 0 40px;
`

export const Clicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: auto;
  color: white;
  background-color: #00D2B2;
  border-radius: 5px;
  border: 0.5px solid white;
  padding: 2px;
  cursor: pointer;
`
