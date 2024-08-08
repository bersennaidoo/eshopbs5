import React, { FunctionComponent, useState } from "react";
import { Product } from "../data/entities";

interface IProductItemProps {
  product: Product;
  callback: (product: Product, quantity: number) => void;
}

const ProductItem: FunctionComponent<IProductItemProps> = (props: IProductItemProps) => {
    const {product, callback} = props
    const [quantity, setQuantity] = useState<number>(1)

    return (
        <div className="card m-1 p-1 bg-light">
            <h4>
                { product.name }
                <span className="badge rounded-pill bg-primary float-end">
                    ${ product.price.toFixed(2)}
                </span>
            </h4>
            <div className="card-text bg-white p-1">
                { product.description }
                <button className="btn btn-success btn-sm float-end" onClick={ () => callback(product, quantity) }>
                    Add To Cart
                </button>
                <select className="form-control-inline float-end m-1" onChange={(ev) => setQuantity(Number(ev.target.value))}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    )
}

export default ProductItem