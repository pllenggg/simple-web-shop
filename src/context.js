import React, { useContext } from 'react'
const ProductContext = useContext()
const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value='hello from context'>
      {children}
    </ProductContext.Provider>
  )
}

const ProductConsumer = ProductContext.consumer

export { ProductProvider, ProductConsumer }
