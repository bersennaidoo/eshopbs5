import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../data/entities";

interface IThumbnailProps {
    product: IProduct
}

const Thumbnail = (props: IThumbnailProps) => {
    const { product } = props

    return (
        <Link to={`/shop/details/${product.id}`} className="hvr-grow">
            <div>
                <img className="img-thumbnail" src={product.image} alt={product.name} />
            </div>
            <p>{product.name}</p>
        </Link>
    )
}

export default Thumbnail