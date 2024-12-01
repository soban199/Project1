import React, { useContext } from 'react';
import { CartContext } from '../CartProvider';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-2">Add some products to your cart.</p>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border p-4 rounded shadow-md"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                title="Decrease Quantity"
                onClick={() => handleDecreaseQuantity(item.id)}
                className="px-3 py-1 text-lg bg-gray-300 rounded"
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                title="Increase Quantity"
                onClick={() => handleIncreaseQuantity(item.id)}
                className="px-3 py-1 text-lg bg-gray-300 rounded"
              >
                +
              </button>
              <button
                title="Remove"
                onClick={() => handleRemoveFromCart(item.id)}
                className="px-4 py-2 text-red-600 rounded"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <button
          title="Checkout"
          className="bg-black hover:bg-white hover:text-black border-2 text-white p-3 rounded-md"
        >
          <Link to="/checkout">Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
