import React, { Component } from 'react'

export class ControlledForm extends Component {
    
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Can access .value or id or name
        console.log(this.inputName.current.value)
        console.log(this.inputName.current.id)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }

    // defaultValue in React.

    render() {
        return (
          <div>
            <h2>Please fill out form:</h2>
              <form onSubmit={this.handleSubmit}>
                
                <div>
                <label htmlFor="id-name" >Your Name:</label>
                <input id="id-name" type="text" name="name" ref={this.inputName}/>
                </div>
                <div>
                <label htmlFor="id-category">Queries:</label>
                <select ref={this.inputCategory} id="id-category" name="category">
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Issue</option>
                </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea ref={this.inputComments} id="id-comments" name="comments" />
                </div>
                <input type="submit" value="Submit" />
                
              </form>
          </div>
        )
    }
}

export default ControlledForm