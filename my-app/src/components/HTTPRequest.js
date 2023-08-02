import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            // set error
            error: null
        }
    }

    componentDidMount() {
        // ass /1 to the end to get one post but does not as not an array.
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                // set to check if it is an ARRAY and if not to set the respose of ONE post.
                posts: Array.isArray(response.data) ? response.data : [response.data]
            })
        })
        // catch any errors.
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }



    render() {
        // JSON.stringify to render all posts from data in console log os 'response'.
        // {/* {JSON.stringify(this.state.posts)} */}
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts:</h2>
                {
                    posts.length ? (
                        posts.map(post => (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />

                            </div>
                        ))
                    ) : (
                        // Check if exsists. catch error or display loading post..
                        this.state.error 
                        ? <p>{this.state.error}</p>
                        : <h4>Loading Posts...</h4>
                    )
                }
                
               
                
            </div>
        )
    }
}



export default HTTPRequest