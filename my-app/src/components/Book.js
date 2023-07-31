import React from "react";

function Book(props) {
    const book = props.book
    return (
        <div>
        <h5>{book.title} from Book.js</h5>
        <p>{book.author} from Book.js</p>
        <p>{book.pages} from Book.js</p>
        </div>
    )
}

export default Book