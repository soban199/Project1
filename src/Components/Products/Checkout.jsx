import React, { useContext, useState } from 'react';
import { CartContext } from '../CartProvider';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: 'COD', // Default to Cash on Delivery
  });

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !customerDetails.name ||
      !customerDetails.email ||
      !customerDetails.address ||
      !customerDetails.phone
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      navigate('/order'); // Redirect to Order page
    } else {
      alert('You need to log in to place an order.');
      navigate('/login'); // Redirect to Login page
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold">No Items to Checkout</h2>
        <p className="text-gray-600 mt-2">Please add items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      {/* Flexbox for two-column layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 bg-other p-6 shadow rounded">
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            {/* Customer Details */}
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your delivery address"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-lg font-semibold mb-2">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={customerDetails.paymentMethod === 'COD'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Payeer"
                    checked={customerDetails.paymentMethod === 'Payeer'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Payoneer
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              title="Place Order"
              type="submit"
              className="w-full py-2 bg-primary text-white font-semibold rounded"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-other-light p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>
                  <img src={item.image} alt="logo" className="w-32 h-32" />
                  {item.title} x {item.quantity}
                  <br />
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4 text-lg font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
