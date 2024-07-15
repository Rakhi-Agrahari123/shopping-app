import React from 'react';
import ProductCard from './../component/ProductCard';
import all_products from '../assets/all_product';

function Women() {
  const womensItem = all_products.filter((product) => {
    return product.category === 'women';

  });
  console.log(womensItem);
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        WOMEN'S CLOTHING
      </h1>
      <div className="grid grid-cols-3 gap-10 bg-skyblue">
        {womensItem.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Women;