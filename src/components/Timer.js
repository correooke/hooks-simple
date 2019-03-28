import React, { useState, useEffect, useDebugValue, useMemo } from 'react';

// Ver tamb Functional updates (setSeconds(seconds => seconds + 1))
// Lazy initial state
const useTimer = initialValue => {
    const [ seconds, setSeconds ] = useState(initialValue);
    useDebugValue(seconds);
    useEffect( () => {
        const interval = setInterval(() => {
            setSeconds(sec => sec + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);   
    
    return seconds;
}
const Timer = () => {
    const seconds = useTimer(0);
    
    return (
        <div className="timer">
            {
                useMemo(() => <p>{seconds}</p>, [])
            }        
        </div>
    );
};

export default Timer;