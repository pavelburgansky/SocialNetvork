import React, { useEffect, useState } from 'react'

function Timer({ interalValue, startStop }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (startStop) {
            const intervalId = setInterval(() => setValue(value => value + 1), interalValue)
            return () => clearInterval(intervalId)
        }
    }, [interalValue, startStop])

    return (
        <div>
            <p>
                {Math.trunc(value / 100) < 10 ? 0 : ""}{Math.trunc(value / 100)}:{value % 100 < 10 ? 0 : ""}{value % 100}

            </p>
            <button onClick={()=>setValue(0)}>Reset</button>
        </div>
    )
}

export default Timer
