import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to="/shop">Return to Shop</Link>
        </div>
    )
}

export default NotFound