import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container p-8 max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-lg my-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">About Paradise Nursery</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Welcome to <strong>Paradise Nursery</strong>, your premier destination for high-quality houseplants, aromatic herbs, and medicinal greenery. Our mission is to bring the calming, restorative beauty of nature directly into your living spaces and workplaces.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4 bg-green-50 rounded-xl">
          <div className="text-3xl mb-2">🌱</div>
          <h3 className="font-semibold text-green-900 mb-1">Quality Plants</h3>
          <p className="text-sm text-gray-600">Sourced directly from organic, eco-friendly nurseries with optimal care.</p>
        </div>
        <div className="p-4 bg-green-50 rounded-xl">
          <div className="text-3xl mb-2">🪴</div>
          <h3 className="font-semibold text-green-900 mb-1">Expert Advice</h3>
          <p className="text-sm text-gray-600">Comprehensive plant care tips included with every green companion.</p>
        </div>
        <div className="p-4 bg-green-50 rounded-xl">
          <div className="text-3xl mb-2">🚚</div>
          <h3 className="font-semibold text-green-900 mb-1">Fast Delivery</h3>
          <p className="text-sm text-gray-600">Safe, eco-packaged delivery straight to your doorstep.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;