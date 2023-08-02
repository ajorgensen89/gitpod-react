import React, {useState, useEffect} from 'react';

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('count effect')
        document.title = count;
    // Only runs when the 'count' chnages. 
    }, [count]);

    // const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //     console.log('count2')
    //     document.title = count2;
    // // Only runs when the 'count2' chnages. 
    // }, [count2]);

    useEffect(() => {
        console.log("Creating timer...")
        const interval = setInterval(() => {
            console.log("set interval...")
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log("cleaning up ...")
            clearInterval(interval);
        }
        // only run one time. pass as empty parameter
    }, []);

    return (
        <div>
            <button onClick= {
                () => setCount(count => count + 1) }>
                    Increment Count
                </button>

                <div>{count}</div>

                {/* <button onClick= {
                () => setCount2(count2 => count2 + 1) }>
                    Increment Count2
                </button>

                <div>{count2}</div> */}

                <div>Time: {time}</div>
        </div>
    )
}

export default UseEffectCounter