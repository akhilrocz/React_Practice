import React from "react";

const Phones = ({ products }) => {
  const filteredProducts = products.filter(
    (product) => product.name === "mobile"
  );
  return (
    <div>
      <h2>Filtered Products</h2>
      <ul>
        {filteredProducts.map((prod) => (
          <li key={prod.id}>
            <p>{prod.id}</p>
            <p>{prod.name}</p>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phones;
