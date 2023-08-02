import React, {useState} from 'react'

function UseStateWithArrays() {
  // useNums = setter func. nums = state property. useState= list
    const [nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        // Spread ... operator to use the 1,2,3 to 4 in a list.
        // setNums([...nums, 4]);
        setNums([...nums, nums.length + 1]);
    }
    const removeNums = () => {
      // use filter() to remove items. DONOT USE PUSH/POP.
        setNums(
            nums.filter((item, removed) => {
                return removed !== nums.length - 1;
            })
        )
    }

    return (        
        // map() to iterate over them. Return list element for each one.
        <div>
            <button onClick={addNums}>Add Item</button>
            <button onClick={removeNums}>Remove Item</button>
            <ul>
              
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}


export default UseStateWithArrays