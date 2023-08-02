import React, {useState, useEffect} from 'react'


function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('count effect')
        document.title = count;
    // Only runs when the 'count' chnages. 
    }, [count]);

    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('count2')
        document.title = count2;
    // Only runs when the 'count2' chnages. 
    }, [count2]);

    return (
        <div>
            <button onClick= {
                () => setCount(count => count + 1) }>
                    Increment Count
                </button>
                <div>{count}</div>
                <button onClick= {
                () => setCount2(count2 => count2 + 1) }>
                    Increment Count2
                </button>
                <div>{count2}</div>    
        </div>
    )
}

export default UseEffectCounter