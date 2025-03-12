import React, { useEffect, useState } from 'react'
import classes from './Timer.module.css'
function Timer({ interalValue, startStop }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (startStop) {
            const intervalId = setInterval(() => setValue(value => value + 1), interalValue)
            return () => clearInterval(intervalId)
        }
    }, [interalValue, startStop])

    return (
        <div className={classes.timerContainer}>
            <p className={classes.time}>
                {Math.trunc(value / 100) < 10 ? 0 : ""}{Math.trunc(value / 100)}:{value % 100 < 10 ? 0 : ""}{value % 100}
            </p>
        </div>
    )
}
export default Timer
