import React, { Component } from 'react'

export class ControlledForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',

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

    render() {
        return (
          <div>
            <h2>Please fill out form:</h2>
              <form>
                
                <div>
                <label htmlFor="id-name" >Your Name:</label>
                <input value={this.state.name} onChange={this.handleNameChange} id="id-name" type="text" name="name" />
                <input type="submit" value="Submit" />
                </div>
                <div>
                <label htmlFor="id-category">Queries:</label>
                <select id="id-category" name="category">
                    <option value="website"></option>
                    <option value="order"></option>
                    <option value="general"></option>
                </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea id="id-comments" name="comments" />
                </div>
                <input type="submit" value="Submit" />
                
              </form>
          </div>
        )
    }
}

export default ControlledForm