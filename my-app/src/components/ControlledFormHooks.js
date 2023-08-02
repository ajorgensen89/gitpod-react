import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category , setCategory] = useState('website');
    const [comments, setComments] = useState('');
    // e for event handler as parameter.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);

    }
    
    return (
        <div>
          <h2>Please fill out form:</h2>
            <form onSubmit={handleSubmit}>
              
              <div>
              <label htmlFor="id-name" >Your Name:</label>
              <input value={name} onChange={(e) => setName(e.target.value)} id="id-name" type="text" name="name" />
              </div>
              <div>
              <label htmlFor="id-category">Queries:</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} id="id-category" name="category">
                  <option value="website">Website Issue</option>
                  <option value="order">Order Issue</option>
                  <option value="general">General Issue</option>
              </select>
              </div>
              <div>
                  <label htmlFor="id-comments">Comments:</label>
                  <textarea value={comments} onChange={(e) => setComments(e.target.value)} id="id-comments" name="comments" />
              </div>
              <input type="submit" value="Submit" />
              
            </form>
        </div>
    )
}



export default ControlledFormHooks