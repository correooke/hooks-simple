import React, { useState, useEffect, useDebugValue, useMemo, useContext } from 'react';
import ThemeContext from './../contexts/ThemeContext';

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
    const theme = useContext(ThemeContext);

    return (
        <div className={`timer ${theme}`}>
            {
                useMemo(() => <p>{seconds}</p>, [seconds])
            }        
        </div>
    );
};

export default Timer;