import React from "react"
import { Link } from "react-router-dom"

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 pt-2">
                    <ul>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/shop/details">Product Details</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 pt-3">
                    <p className="display-1">
                        Your friendly surgical shop
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header