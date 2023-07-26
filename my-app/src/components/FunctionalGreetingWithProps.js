// Not needed in new React but better to use for use with old.
import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello there React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>With Props..{props.greeting}, 
    my name is {props.name}, cat is {props.cat}</h1>
}

// Use default to import with any name.
export default FunctionalGreetingWithProps;
