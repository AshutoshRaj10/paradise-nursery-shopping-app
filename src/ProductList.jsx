import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bac?auto=format&fit=crop&q=80&w=400', cost: '$18' },
      { id: 2, name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&q=80&w=400', cost: '$15' },
    ]
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { id: 3, name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&q=80&w=400', cost: '$22' },
      { id: 4, name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=400', cost: '$14' },
    ]
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { id: 5, name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400', cost: '$12' },
      { id: 6, name: 'Peppermint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=400', cost: '$10' },
    ]
  }
];

const ProductList = ({ onBackToHome }) => {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isItemInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="product-list-page min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-green-800 text-white p-4 sticky top-0 z-50 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onBackToHome}>
          <span className="text-2xl">🌿</span>
          <span className="text-xl font-bold tracking-wide">Paradise Nursery</span>
        </div>
        <div className="flex gap-6 items-center font-medium">
          <button onClick={onBackToHome} className="hover:text-green-200 transition">Home</button>
          <button onClick={() => setShowCart(false)} className="hover:text-green-200 transition">Plants</button>
          <button 
            onClick={() => setShowCart(true)} 
            className="relative flex items-center bg-green-700 px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            🛒 <span className="ml-2 font-bold">Cart</span>
            {totalQuantity > 0 && (
              <span className="ml-2 bg-yellow-400 text-green-950 font-bold rounded-full h-6 w-6 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Main Content View */}
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Explore Our Plants</h1>
          {plantsData.map((categoryGroup, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2 mb-6">
                {categoryGroup.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categoryGroup.plants.map((plant) => {
                  const added = isItemInCart(plant.id);
                  return (
                    <div key={plant.id} className="plant-card bg-white rounded-xl shadow border border-gray-100 overflow-hidden flex flex-col justify-between">
                      <img src={plant.image} alt={plant.name} className="h-48 w-full object-cover" />
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{plant.name}</h3>
                          <p className="text-green-700 font-semibold text-md mt-1">{plant.cost}</p>
                        </div>
                        <button
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                          className={`mt-4 w-full py-2 px-4 rounded-lg font-medium text-white transition ${
                            added ? 'btn-disabled bg-gray-400' : 'bg-green-700 hover:bg-green-800'
                          }`}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
