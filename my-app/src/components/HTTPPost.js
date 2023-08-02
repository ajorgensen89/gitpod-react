import axios from 'axios'
import React, { Component } from 'react'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiResponse: null
        }
    }



    postToApi = () => {
        // 'url', first.
        axios.post('https://jsonplaceholder.typicode.com/posts',
        // API verifies data.
            {
                title: 'Bear',
                body: 'SO SO CUTE',
                userId: 456,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
        console.log("postToApi")
    }

    render() {
        const {apiResponse} = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>Create Post

                </button>
                {
                    apiResponse 
                    ? (<div>
                        <h1>{apiResponse.title}</h1>
                        <p>{apiResponse.body}</p>
                        <p>{apiResponse.userId}</p>
                        <p>Post id: {apiResponse.id}</p>
                    </div>) 
                    : (<p>Click the button above to render post</p>)
                }
            </div>
        )
    }
}

export default HTTPPost