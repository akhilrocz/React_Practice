import React from "react";

const Gadgets = ({ products }) => {
  const filteredProducts = products.filter((product) => product.price > 50000);

  console.log(filteredProducts);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product}>
            {product.id}, {product.name}, {product.description}, {product.price}
          </li>
        ))}
      </ul>
      <div>
        <ul>
          {filteredProducts.map((prod) => (
            <li key={prod.id}>
              <h4 style={{ border: "2px solid green" }}>
                {" "}
                {prod.id}, {prod.name}, {prod.description}, {prod.price}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gadgets;
