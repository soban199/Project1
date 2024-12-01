import React, { useContext, useState } from 'react';
import { ProductContext } from '../ProductProvider';

const CategoryButtons = () => {
  const { dispatch } = useContext(ProductContext);
  const categories = ['All', 'Shirts', 'Pants & Jeans', 'T-shirts', 'Sale','Winter'];
  const [activeCategory, setActiveCategory] = useState('All'); // Track the active category

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  return (
    <div className="flex flex-wrap gap-2 my-4 justify-center md:justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-2 py-2 rounde text-sm md:text-base hover:bg-primary-light ${
            activeCategory === category ? 'bg-primary-light font-bold' : ''
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
