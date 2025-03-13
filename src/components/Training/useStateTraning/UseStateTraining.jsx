import React, { useState } from 'react'
import Card from './Card'
import Button from '../Button'
import classes from './UseStateTraining.module.css'
const UseStateTraining = () => {
    const [visibility, setVisibility] = useState(false)
    const handleClick = () => {
        setVisibility(visibile => !visibile)
    };
    return (
        <div className={classes.whatIsRreact}>
            <h1> What is React?</h1>
            <Button onClick={handleClick}>See more</Button>
           {visibility && <Card />}
        </div>
    )
}

export default UseStateTraining
