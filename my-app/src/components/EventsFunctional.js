import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("Click functional button")
    }
    return (
        <div>
            <button onClick={clickHandler}>click func btn</button>
        </div>
    )
}



export default EventsFunctional