import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
    }



    render() {
        // JSON.stringify to render all posts from data in console log os 'response'.
        return (
            <div>
                <h2>Posts:</h2>
                {JSON.stringify(this.state.posts)}
            </div>
        )
    }
}



export default HTTPRequest