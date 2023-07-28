import React from "react"

function UserMessage(props) {
    return (
        
        <div>
            {props.isLoggedIn ? (
                    <div>
                        <p>Welcome. Complete these steps.</p>
                        <ol>
                            <li>Confirm Email</li>
                            <li>Complete Profile</li>
                            <li>Subscribe</li>
                        </ol>
                    </div>
                ) : (<p>Please Sign In!</p>) }
        </div>
    )
}

export default UserMessage