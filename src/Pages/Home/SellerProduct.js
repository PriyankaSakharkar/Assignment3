import React from 'react'
import Sellerimg1 from './../../Assets/PNGimg/Sellerimg1.png'
import Sellerimg2 from './../../Assets/PNGimg/Sellerimg2.png'
import Sellerimg3 from './../../Assets/PNGimg/Sellerimg3.png'
import Sellerimg4 from './../../Assets/PNGimg/Sellerimg4.png'
import Sellerimg5 from './../../Assets/PNGimg/Sellerimg5.png'
import Sellerimg6 from './../../Assets/PNGimg/Sellerimg6.png'
import Sellerimg7 from './../../Assets/PNGimg/Sellerimg7.png'
import Sellerimg8 from './../../Assets/PNGimg/Sellerimg8.png'
import ProductCard from './ProductCard';
function SellerProduct() {
  const products = [
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg1],
      colors: ['#23A6F0', '#23856D', '#E77C40', '#000000']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg2],
      colors: ['#F56565', '#48BB78', '#ED8936', '#2D3748']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg3],
      colors: ['#DD6B20', '#4299E1', '#38A169', '#D69E2E']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg4],
      colors: ['#B794F4', '#2B6CB0', '#ECC94B', '#E53E3E']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg5],
      colors: ['#23A6F0', '#23856D', '#E77C40', '#000000']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg6],
      colors: ['#F56565', '#48BB78', '#ED8936', '#2D3748']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg7],
      colors: ['#DD6B20', '#4299E1', '#38A169', '#D69E2E']
    },
    {
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
      imageUrl: [Sellerimg8],
      colors: ['#B794F4', '#2B6CB0', '#ECC94B', '#E53E3E']
    }

  ];
  return (
    <div className="container ">
    <div className="text-center my-20">
      <p className="pt-4 mt-14 text-xl text-gray-400">Featured Products</p>
      <h1 className="text-3xl font-semibold my-3">BESTSELLER PRODUCTS</h1>
      <p className="text-gray-400">Problems trying to resolve the conflict between</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mx-20 ">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
  )
}

export default SellerProduct