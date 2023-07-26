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
            introduction: "Hello toggle",
            buttonText: "Exit toggle",
            count: 0,
            countBy5: 0,

        };
    }

    incrementClick() {
        this.setState({
            count : this.state.count +1
        }, () => {
            console.log("Inside callback func no.-", this.state.count)

        });
        console.log("No callback no.-", this.state.count)
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                countBy5: prevState.countBy5 +1
            }
        })
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    // handleClick() {
    //     this.setState({
    //         // If intro 'hello', change to 'byebye', otherwise be 'hello'
    //         introduction : this.state.introduction === "Hello toggle" ? "Byebye toggle" : "Hello toggle",
    //         buttonText: this.state.buttonText === "Exit toggle" ? "Enter toggle" : "Exit toggle",

    //         // Add a new arrow function to specify new state.
    //     }, () => {
    //         console.log("new state -", 
    //         this.state.introduction, this.state.buttonText);    

    //     });
    //     // logs before setState is called. Use Callback functions.
    //     console.log("clicked button with old state -", 
    //     this.state.introduction, this.state.buttonText);
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                introduction : prevState.introduction === "Hello toggle" ? "Byebye toggle" : "Hello toggle",
                buttonText: prevState.buttonText === "Exit toggle" ? "Enter toggle" : "Exit toggle",
            }

        });
    }

    render() {
        // Add {} for multiple lines of code
        return (
            <div>
                {this.state.introduction}
            <h1> Stateful {this.props.greeting},
            {this.props.dude} </h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            
            <button onClick={() => this.incrementClick()}>Click to go UP</button>
            <p>you clicked {this.state.count} times</p>

            <button onClick={() => this.incrementFive()}>Click to go UPTO 5</button>
            <p>you clicked {this.state.countBy5} times</p>
            </div>
        )
    }

}

export default StatefulGreetingWithCallback;