import React from "react";

const Products = () => {
  const products = [
    {
      name: "Nike Air Zoom",
      desc: "Lightweight speed and responsiveness.",
    },
    {
      name: "Nike React Infinity",
      desc: "Maximum comfort for long runs.",
    },
    {
      name: "Nike Pegasus Pro",
      desc: "Built for everyday performance.",
    },
  ];
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group border rounded-2xl p-8 hover:bg-nikeBlack hover:text-white transition duration-300"
            >
              <div className="h-40 bg-nikeGray/20 rounded-xl mb-6 flex items-center justify-center text-nikeGray">
                Shoe Image
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm opacity-80">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
