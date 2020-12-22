import React, { useState, useEffect } from 'react'
import Category from './Category'
import List from './List'
import { ProductListOuter } from './ProductList.styles'
import { fetchData } from './utils'
// this product component fetch data
const PRODUCT_ENDPOINT = '/uploads/1/1/8/2/118296037/products.json'
const CATEGORIES_ENDPOINT = '/uploads/1/1/8/2/118296037/categories.json'
const ProductList = ({ onAddToCart = () => {} }) => {
// data
  const [data, setData] = useState({
    products: [],
    categories: []
  })
  const [filteredProducts, setFilteredProducts] = useState(data.products)
  // this useEffect fetch the categories and
  useEffect(() => {
    const fetchProductCatelogue = async () => {
      const products = await fetchData(PRODUCT_ENDPOINT)
      const categories = await fetchData(CATEGORIES_ENDPOINT)
      setData({
        products,
        categories
      })
    }

    fetchProductCatelogue()
  }, [])

  useEffect(() => {
    setFilteredProducts(data.products)
  }, [data.products])

  // category use only for filter whether the product is in what kind of category
  const handleCategoryChange = (categoryId) => {
    const { products } = data
    const categoryProducts = categoryId
      ? products.filter(product => product.category === categoryId)
      : products
    setFilteredProducts(categoryProducts)
  }

  return (
    <ProductListOuter>
      <Category
        categories={data.categories}
        onCategoryChange={handleCategoryChange}
      />
      <List
        items={filteredProducts}
        onAddToCart={onAddToCart}
      />
    </ProductListOuter>
  )
}

export default ProductList
