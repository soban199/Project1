import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductProvider';
import { CartContext } from '../CartProvider';

const ProductDetail = () => {
  const { id } = useParams(); // Get product id from URL params
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { ...product, size: selectedSize } });
  };

  const product = products.find((p) => p.id === parseInt(id)); // Find the product by id

  if (!product) return <p>Product not found</p>; // Show message if product is not found

  const sizes = ['S', 'M', 'L', 'XL']; // Define size options

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="max-w-5xl w-full p-4 bg-other relative flex flex-col md:flex-row">
        {/* Left Side: Product Details */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={product.image}
            alt={`${product.title}`}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            Price: <span className="font-semibold">${product.price}</span>
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-500">
            Category: <span className="font-medium">{product.category}</span>
          </p>
        </div>

        {/* Right Side: Size Selector */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end space-y-4">
          <div className="bg-other p-4 w-full md:w-72">
            <p className="text-other-gray font-semibold mb-2">Select Size</p>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 bg-other-light border transition w-full md:w-auto text-center ${
                    selectedSize === size
                      ? 'bg-other text-other-dark border-other-dark'
                      : 'bg-other text-other-gray hover:border-other-dark'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-primary text-other py-2 px-4 hover:bg-primary-dark w-full mr-8 md:w-60"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
