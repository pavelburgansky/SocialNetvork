import React, { useState } from 'react'
import Timer from './Timer'
import Button from '../Button'
function UseEffectTraining() {
    const [interalValue, setIntervalValue] = useState()
    const [startStop, setStartStop] = useState(false)
    const handleClick = (ms)=>{
        setIntervalValue(ms)
    }
    const startStopToggle = ()=>{
        setStartStop(startStop=>!startStop)
    }

  return (
    <div>
        <h1>Timer</h1>
      <Button onClick={startStopToggle}>{startStop?<p>stop</p>:<p>start</p>}</Button> 
      <Timer interalValue={interalValue} startStop={startStop}></Timer>
      <Button onClick={()=>handleClick(10)}>10ms</Button>
      <Button onClick={()=>handleClick(100)}>100ms</Button>
      <Button onClick={()=>handleClick(500)}>500ms</Button>
      <Button onClick={()=>handleClick(1000)}>1000ms</Button>
    </div>
  )
}

export default UseEffectTraining
