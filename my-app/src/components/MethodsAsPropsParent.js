import React, { Component } from "react";
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Change to true or False to change the render outcome
            isLoggedIn: false,
        }
    };

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
        console.log("Signed in")
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log("Signed out")
    }

    render() {
        return (
            // this.state effects this.
            <div>
                <MethodsAsPropsChild 
                isLoggedIn={this.state.isLoggedIn}
                handleSignIn={this.handleSignIn} 
                handleSignOut={this.handleSignOut}
                />
            </div>
        )
    };

}

export default MethodsAsPropsParent