import React from 'react'
import { Button } from './shared'

const Category = ({ categories, onCategoryChange = () => {} }) => {
  const all = {
    name: 'All'
  }
  const availableCategories = [...categories, all]
  // const handleChange = (categoryId) => {
  //   onCategoryChange(categoryId)
  // }
  return (
    <div>
      {availableCategories.map((category, index) => (
        <Button
          key={index}
          label={category.name}
          value={category.id}
          onChange={onCategoryChange}
        />
      ))}
    </div>
  )
}

export default Category
