import React, { useState, useEffect } from 'react'
import Category from './Category'
import List from './List'
import { ProductListOuter } from './ProductList.styles'
import { connect } from 'react-redux'
import { loadProducts } from '../store/products'
import { loadCategories } from '../store/categories'
import { addedToCart } from '../store/carts'

const ProductList = ({ loadProducts, loadCategories, addedToCart, data = [] }) => {
  // data
  const [filteredProducts, setFilteredProducts] = useState(data.products)

  useEffect(() => {
    if (!data.products.length) {
      const fetchProducts = () => {
        loadCategories()
        loadProducts()
      }
      fetchProducts()
    }
  }, [])
  useEffect(() => {
    setFilteredProducts(data.products)
  }, [data.products])

  const handleAddToCart = (value) => {
    console.log('Item is added to cart!: ', value)
    addedToCart(value)
  }
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
      {data.categories.length && <Category
        categories={data.categories}
        onCategoryChange={handleCategoryChange}
                                 />}
      <List
        items={filteredProducts}
        onAddToCart={handleAddToCart}
      />
    </ProductListOuter>
  )
}
// products: state.entities.products

const mapStateToProps = state => ({
  data: {
    products: state.entities.products,
    categories: state.entities.categories
  }
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts()),
  loadCategories: () => dispatch(loadCategories()),
  addedToCart: (item) => dispatch(addedToCart(item))
})

// take 2 args
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
