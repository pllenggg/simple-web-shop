// import React, { useState } from 'react'
// import {
//   QuantityInput
// } from './index.styles'
// import Button from '../Button'

// const Counter = ({ value = 0, maxQty, minQty = 0, onError = () => {} }) => {
//   const [quantity, setQuantity] = useState(0)
//   const handleChange = (e) => {
//     const value = e.target.value
//     // definitely cannot type -1
//     if (value === 0) return
//     if (value > maxQty) {
//       onError(`maximum is ${maxQty}`)
//     }

//   }
//   return (
//     <div>
//       <Button
//         value='-'
//         onChange={() => handleDecrement(-1)}
//         color='white'
//         backgroundColor='#00D2B2'
//       />

//       <QuantityInput
//         type='number'
//         value={quantity}
//         onChange={handleChange}
//       />
//       <Button
//         value='+'
//         onChange={() => handleIncrement(+1)}
//         color='white'
//         backgroundColor='#00D2B2'
//       />
//     </div>
//   )
// }

// export default Counter
