
import React from "react";

const ProductHero = () => {
  return (
    <section className="pt-32 pb-16 bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl text-white">
          {/* Updated color and shadow for heading */}
          <h1 className="heading-xl mb-6 text-white drop-shadow-md">
            Our Products
          </h1>
          <p className="text-lg opacity-90">
            High-quality pharmaceutical raw materials sourced to meet IP, BP, and USP standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
