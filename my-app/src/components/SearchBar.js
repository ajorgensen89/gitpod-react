import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: importedNames

        }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filterNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filterNames
        })

    }

    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <p>matching names found:{this.state.names.length}</p>
                <form>
                    <input onChange={this.handleChange} type="name" placeholder="search names..."/>
                </form>
                    {this.state.names.map(name => {
                        // ADD KEY TO GET RID OF 'KEY' ERROR in console.
                        return <p key={name}>{name}</p>
                    })}
            </div>
            
        )
    }
}

export default SearchBar