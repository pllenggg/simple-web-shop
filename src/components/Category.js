import React from 'react'
import { Button } from './shared'

const Category = ({ categories, onCategoryChange = () => {} }) => {
  const all = {
    name: 'All'
  }
  const availableCategories = [...categories, all]
  const handleChange = (categoryId) => {
    onCategoryChange(categoryId)
  }
  return (
    <div>
      {availableCategories.map((category, index) => (
        <Button
          key={index}
          value={category}
          label={category.name}
          onChange={handleChange(category.id)}
        />
      ))}
    </div>
  )
}

export default Category
