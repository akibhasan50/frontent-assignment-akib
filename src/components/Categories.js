import React, { useState } from 'react'

export default function Categories() {
    const [categories, setCategories] = useState([

        {
            id: 1,
            title: 'User',
         
          },
        {
            id: 2,
            title: 'Repository',
         
          },
    ]
    )
  return (
    <div className="btn-container">
    {categories.map((category, index) => {
      return (
        <button
          type="button"
          className="filter-btn"
          key={index}
          
        >
          {category.title}
        </button>
      );
    })}
  </div>
  )
}
