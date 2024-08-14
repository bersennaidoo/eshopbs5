import React from "react";
import Product, { IProduct } from "./Product";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = (props: IProductListProps) => {
  const { products } = props;

  return (
    <div>
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
