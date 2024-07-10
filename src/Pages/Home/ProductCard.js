import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="flex flex-col overflow-hidden ">
      <img src={product.imageUrl} alt={product.title} className="w-[239px] h-[427px] object-cover" />
      <div className="mt-4 ">
        <p className="text-xl font-semibold">{product.title}</p>
        <p className="text-lg text-gray-600 font-semibold">{product.department}</p>
        <p className="text-xl">
          <span className="text-gray-400 mr-1">{product.originalPrice}</span> 
          <span className="text-green-600">{product.discountedPrice}</span>
        </p>
        <div className="flex mt-3 space-x-2">
          {product.colors.map((color, index) => (
            <button 
              key={index} 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
