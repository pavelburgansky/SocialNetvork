import React, { useState } from 'react'
import Card from './Card'
import Button from '../Button'
const UseStateTraining = () => {
    const [visibility, setVisibility] = useState(false)
    const handleClick = () => {
        setVisibility(visibile => !visibile)
    };
    return (
        <div className=''>
            <h1> What is React?</h1>
            <Button onClick={handleClick}>Button</Button>
           {visibility && <Card />}
        </div>
    )
}

export default UseStateTraining
