import React, { Component } from 'react';
import LifeCyclesCDMChild from './LifeCyclesCDMChild';

export class LifeCyclesCDM extends Component {

    constructor(props) {
        console.log('Constructor')
        super(props)
        // Set the data needed
        this.state = {
            data: 'loading',
        }
    }

    getData() {
        console.log('getData()')
        setTimeout(() => {
            // Set a change to the data
            this.setState({
                data: 'Ive Loaded!',
            })
        }, 3000)
    }
// Create a call to the func to change data after a certain time in the func
    componentDidMount() {
        console.log('DidMount')
        this.getData()
    }

    render() {
        // Show the data in html
        console.log('Renders')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM