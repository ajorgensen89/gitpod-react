import React, { Component } from "react";

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Change to true or Flase to change the render outcome
            isLoaded: true,
            isLoggedIn: true
        }
    };


    render() {
        return (
            // this.state effects this.
            <div>
                <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
                {this.state.isLoggedIn ? (
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
    };

}

export default ConditionalRenderingClass