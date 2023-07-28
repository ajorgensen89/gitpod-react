import React from "react"

function ConditionalRenderingFunctional(props) {
    return (
        // Change prop connecte='' in App.js file for Connected or Not Connected.
        <div>
            <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>

        </div>
    )
}

export default ConditionalRenderingFunctional