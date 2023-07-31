import React, { Component } from 'react'

export class ControlledForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: 'website',
            comments: '',

        }
    }

    // handleNameChange = (event) => {
    //     let newValue = event.target.value
    //     console.log("typed", newValue)
    //     this.setState({
    //         name: newValue,
    //     })

    // }
    
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
            
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
            
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
          <div>
            <h2>Please fill out form:</h2>
              <form onSubmit={this.handleSubmit}>
                
                <div>
                <label htmlFor="id-name" >Your Name:</label>
                <input value={this.state.name} onChange={this.handleNameChange} id="id-name" type="text" name="name" />
                </div>
                <div>
                <label htmlFor="id-category">Queries:</label>
                <select value={this.state.category} onChange={this.handleCategoryChange} id="id-category" name="category">
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Issue</option>
                </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange} id="id-comments" name="comments" />
                </div>
                <input type="submit" value="Submit" />
                
              </form>
          </div>
        )
    }
}

export default ControlledForm