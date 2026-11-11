import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse price string e.g. "$18" -> 18
  const parseCost = (costStr) => {
    return parseFloat(costStr.replace('$', '')) || 0;
  };

  // Calculate total amount for all items in cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate subtotal per item
  const calculateSubtotal = (costStr, quantity) => {
    return (parseCost(costStr) * quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout capability will be integrated in the next release.');
  };

  return (
    <div className="cart-container max-w-4xl mx-auto p-6 my-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Your cart is currently empty.</p>
          <button 
            onClick={onContinueShopping}
            className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-xl gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm">Unit Price: {item.cost}</p>
                  <p className="text-green-700 font-semibold text-sm mt-1">
                    Subtotal: ${calculateSubtotal(item.cost, item.quantity)}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleDecrement(item)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-800 w-6 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => handleIncrement(item)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-100 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold text-gray-800">
              Total Amount: <span className="text-green-700">${calculateTotalAmount()}</span>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={onContinueShopping}
                className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Continue Shopping
              </button>
              <button 
                onClick={handleCheckout}
                className="bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;