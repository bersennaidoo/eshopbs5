import React from "react";
import { Outlet } from "react-router-dom";
import { IProduct } from "../data/entities";
import Thumbnail from "./Thumbnail";

interface IDetailsProps {
  products: IProduct[];
}

const ProductList = (props: IDetailsProps) => {
  const { products } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="d-flex flex-column">
            {products.map((prod) => (
              <Thumbnail key={prod.id} product={prod} />
            ))}
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
