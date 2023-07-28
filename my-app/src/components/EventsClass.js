import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("click class button")
    }
    mouseOver(){
        console.log("moused")
    }
    keyOver(){
        console.log("key press")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click class btn</button>
                <button onMouseOver={this.mouseOver}>Mouse Over</button>
                <button onKeyUp={this.keyOver}>Key up</button>
            </div>
        )
    }
}


export default EventsClass