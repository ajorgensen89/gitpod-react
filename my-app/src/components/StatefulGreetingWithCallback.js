// Not needed in new React but better to use for use with old.
import React from "react";

// do not return. Render.
class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        //to call React.Components. Pass props so super pass props too.
        super(props);
        //access and manipulate {properties}
        this.state = {
            // Change intro on button click
            introduction: "Hello",
            buttonText: "Exit",

        };
    }

    handleClick() {
        this.setState({
            introduction : "Byebye",
            buttonText: "Enter",
            // Add a new arrow function to specify new state.
        }, () => {
            console.log("new state -", 
            this.state.introduction, this.state.buttonText);    

        });
        // logs before setState is called. Use Callback functions.
        console.log("clicked button with old state -", 
        this.state.introduction, this.state.buttonText);
    }

    render() {
        // Add {} for multiple lines of code
        return (
            <div>
                {this.state.introduction}
            <h1> Stateful {this.props.greeting},
            {this.props.dude} </h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreetingWithCallback;