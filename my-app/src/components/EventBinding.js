// Not needed in new React but better to use for use with old.
import React from "react";

// do not return. Render.
class StatefulGreeting extends React.Component {

    constructor(props) {
        //to call React.Components. Pass props so super pass props too.
        super(props);
        //access and manipulate {properties}
        this.state = {
            // Change intro on button click
            introduction: "Hello",
            buttonText: "Exit",

        };
        // better for performance
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick = () => {}
    handleClick() {
        this.setState({
            introduction : "Byebye",
        })
        this.setState({
            buttonText: "Enter",
        })
        console.log("clicked button", this.state.introduction);
    }


    render() {
        // Add {} for multiple lines of code
        return (
            <div>
                {this.state.introduction}
            <h1> Stateful {this.props.greeting},
            {this.props.dude} </h1>
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreeting;
