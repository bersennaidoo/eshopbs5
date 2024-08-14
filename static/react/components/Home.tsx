import React from "react"
import {IProduct} from "./Product"
import Thumbnail from "./Thumbnail"

interface IHomeProps {
    products: IProduct[]
}

const Home = (props: IHomeProps) => {
    const { products } = props

    return (
        <div className="container">
            <div className="row">
            {products.map((prod) => (
                <div className="col-md-4">
                <Thumbnail
                  key={prod.id}
                  image={prod.image}
                  name={prod.name}
                />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Home