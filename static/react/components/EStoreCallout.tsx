import React from "react"
import { CCallout } from "@coreui/react"

interface IEStoreCallout {}

const EStoreCallout = (props: IEStoreCallout) => {
    return (
        <CCallout className="text-info bg-primary">
            Checkout the latest tv's Now!!!
        </CCallout>
    )
}

export default EStoreCallout