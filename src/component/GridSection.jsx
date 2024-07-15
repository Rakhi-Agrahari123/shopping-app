import React from "react";
import largeImage from "./../assets/fitSection/bigmenimge.jpg";
import all_products from "../assets/all_product";

function GridSection() {
  const topFourItem = all_products.slice(3, 7);
  console.log(topFourItem);
  return (
    <div className="max-w-7xl mx-auto mt-14  px-4 py-12">
      <h1 className="text-center leading-wide text-2xl mb-8 font-medium animate-pulse  ">
        STYLIST PICKS FOR EVERY OCCASION
      </h1>
      {/* grid section */}

      <div className="grid grid-cols-4 gap-6 grid-rows-2 p-0">
        {/* large image */}
        <div className="col-span-2 row-span-2">
          <div className=" relative overflow-hidden" >
            <img
              className="w-full h-full object-cover hover:scale-110 transition-all transform-ease-in-out delay-300"
              src={largeImage}
              alt="men image"
            />
            <button className="absolute inset-0 text-white text-lg w-full opacity-0 hover:opacity-100 transition-opacity ease-linear delay-200 bg-black bg-opacity-50 ">View Details</button>
          </div>
        </div>
     
     
        {topFourItem.map((product, index) => (
          <div className=" relative overflow-hidden">
            <img
              className="w-full h-full object-cover  hover:scale-110 transition-all transform-ease-in-out delay-300"
              src={product.image}
            />
             <button className="absolute inset-0 text-white text-lg w-full opacity-0 hover:opacity-100 transition-opacity ease-linear delay-200 bg-black bg-opacity-50 ">View Details</button>
          </div>
        ))}
    </div>
    </div>
  );
}

export default GridSection;