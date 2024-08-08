import React, { FC, useState } from "react";
import Header from "./Header";
import ProductItem from "./ProductItem";
import CategoryList from "./CategoryList";
import { Product, ProductSelection } from "../data/entities";

interface IProductListProps {
  products: Product[];
  categories: string[];
  selections: ProductSelection[];
  addToOrder: (product: Product, quantity: number) => void;
}

const ProductList: FC<IProductListProps> = (props: IProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const products = props.products.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div>
      <Header selections={props.selections} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-2">
            <CategoryList
              categories={props.categories}
              selected={selectedCategory}
              selectCategory={setSelectedCategory}
            />
          </div>
          <div className="col-9 p-2">
            {products.map((p) => (
              <ProductItem key={p.id} product={p} callback={props.addToOrder} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
