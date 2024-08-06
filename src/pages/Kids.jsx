import React from 'react';
import ProductCard from '../component/ProductCard';
import all_products from '../assets/all_product';


function Kids() {
  <h1>kids</h1>
  const kidItems = all_products.filter((product) => {
    return product.category === 'kid';

  });
  console.log(kidItems);
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium px-0 m-0 animate-pulse">
        KID'S CLOTHING
      </h1>
      <div className="grid grid-cols-3 gap-10 bg-skyblue">
        {kidItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}


export default Kids