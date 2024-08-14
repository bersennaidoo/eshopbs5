import React from "react"

export interface IProduct {
    id: string 
    name: string 
    price: number 
    url: string 
    description: string 
    image: string
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    const { product } = props
    
    return (
        <div>
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <div>
                <img src={product.image} alt={ product.description } />
            </div>
            <div>
                <div>
                    ${product.price}
                </div>
                <button 
                   data-item-id={product.id}
                   data-item-name={product.name}
                   data-item-price={product.price}
                   data-item-url={product.url}
                   data-item-image={product.image}
                   data-item-description={product.description}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product