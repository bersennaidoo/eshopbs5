import React from "react"
import { useParams } from "react-router-dom"
import { IProduct } from "../data/entities"

interface IProductDetailProps {
    products: IProduct[]
}

const ProductDetail = (props: IProductDetailProps) => {
    const { id } = useParams()
    const { products } = props
    const product: IProduct | undefined = products.find((prod) => prod.id === id)

    return (
        <div>
            <img className="img-thumbnail hvr-grow" src={product?.image} alt={product?.name} />
            <h2>{product?.name}</h2>
            <div>
                ${product?.price}
            </div>
             <button 
                   className="snipcart-add-item btn btn-primary hvr-grow"
                   data-item-id={product?.id}
                   data-item-name={product?.name}
                   data-item-price={product?.price}
                   data-item-url="/react/data/db.json"
                   data-item-image={product?.image}
                   data-item-description={product?.description}
                >
                    Add to Cart
                </button>

        </div>
    )
}

export default ProductDetail