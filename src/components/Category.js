import React from 'react'
import { Button } from './shared'

const Category = ({ categories, onCategoryChange = () => {} }) => {
  const all = {
    name: 'All'
  }
  const availableCategories = [...categories, all]
  const handleChange = (categoryId) => {
    onCategoryChange(categoryId)
    console.log('when the category button is clicked')
  }
  return (
    <div>
      {availableCategories.map((category, index) => (
        <Button
          key={index}
          value={category}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}

export default Category
