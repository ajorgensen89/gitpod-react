import React, { Component } from "react";
import LifeCyclesCDUChild from "./LifeCyclesCDUChild";

export class LifeCycleCDU extends Component {

    constructor(props) {
        console.log('constuc')
        super(props)
        this.state = {
            greeting: 'Helloooo'
        }
    }

    updateGreeting = () => {
        console.log('updateGreeting()')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Helloooo' ? 'Goodbye': 'Helloooo'
            }
        })
    }

    componentDidUpdate() {
        console.log("Component Updated")
        console.log(this.state.greeting)
    }


    render() {
        console.log('cCDU rendered')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
            </div>
            
        )
    }

}

export default LifeCycleCDU