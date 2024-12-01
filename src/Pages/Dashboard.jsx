import React from 'react';

import CategoryButtons from '../Components/Products/CategoryButtons';
import Products from '../Components/Products/Pro';
import Slideshow from '../SlideShow';

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold mb-4">Our Products</h1> */}
      <CategoryButtons />
      <Slideshow className='w-full'/>
      <Products />
    </div>
  );
};

export default Dashboard;
