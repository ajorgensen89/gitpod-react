import React, {useState, useEffect} from 'react'


function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    });

    return (
        <div>
            <button onClick= {
                () => setCount(count => count + 1) }>
                    Increment Count
                </button>
                <div>{count}</div>
        </div>
    )
}

export default UseEffectCounter