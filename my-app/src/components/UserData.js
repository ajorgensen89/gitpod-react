import React from "react"

function UserData(props) {
    return (
        
        <h1>{props.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
    )
}

export default UserData