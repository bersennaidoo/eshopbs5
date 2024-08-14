import React from "react";

interface IThumbnailProps {
    image: string
    name: string
}

const Thumbnail = (props: IThumbnailProps) => {
    const { image, name } = props

    return (
        <a href="#todo" className="hvr-grow">
            <div>
                <img className="img-fluid" src={image} alt={name} />
            </div>
            <p>{name}</p>
        </a>
    )
}

export default Thumbnail