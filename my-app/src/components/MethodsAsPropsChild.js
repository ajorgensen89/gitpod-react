import React from "react"

function MethodsAsPropsChild(props) {
    return (
        
        <div>
            {props.isLoggedIn ? (
                    <div>
                        <p>Welcome!! Complete these steps.</p>
                        <ol>
                            <li>Confirm Email</li>
                            <li>Complete Profile</li>
                            <li>Subscribe</li>
                        </ol>
                        <button onClick={props.handleSignOut}>Sign Out</button>
                    </div>
                ) : (<div>
                    <p>Please Sign In!!!</p>
                    <button onClick={props.handleSignIn}>Sign In</button>
                </div>) }
        </div>
    )
}

export default MethodsAsPropsChild