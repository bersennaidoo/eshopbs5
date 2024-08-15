import React from "react"
import { IProduct } from "../data/entities"
import Thumbnail from "./Thumbnail"

interface IShopProps {
    products: IProduct[]
}

const Shop = (props: IShopProps) => {
    const { products } = props

    return (
        <div className="container">
            <div className="row">
            {products.map((prod) => (
                <div className="col-md-4 mt-4" key={prod.id}>
                <Thumbnail
                  product={prod}
                />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Shop