import React, { Component } from "react";
import UserMessage from "./UserMessage";
import UserData from "./UserData";

export class NestingComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Change to true or Flase to change the render outcome
            isLoaded: false,
            isLoggedIn: true
        }
    };


    render() {
        return (
            // this.state effects this.
            <div>
                <UserData isLoaded={this.state.isLoaded}/>

                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    };

}

export default NestingComponents