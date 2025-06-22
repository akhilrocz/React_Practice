import React from "react";

const Products = ({ products }) => {
  return (
    <>
      <div>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Displaying products where Number of sales is more than Quantity</h4>
        <ul>
          {products.map((product) => (
            <li>
              Name: {product.name}, Quantity: {product.quantity}, Sales:{" "}
              {product.sales}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
