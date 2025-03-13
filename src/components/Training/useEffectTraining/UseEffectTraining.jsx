import React, { useState } from 'react'
import Timer from './Timer'
import Button from '../Button'
import classes from './Timer.module.css'
function UseEffectTraining() {
  const [interalValue, setIntervalValue] = useState()
  const [startStop, setStartStop] = useState(false)
  const [reset, setReset] = useState(false)

  const handleClick = (ms) => {
      setIntervalValue(ms)
  }
  
  const startStopToggle = () => {
      setStartStop(startStop => !startStop)
  }

  const resetTimer = () => {
      setStartStop(false)
      setReset(true)
      setTimeout(() => setReset(false), 0) // Сбрасываем флаг reset после рендера
  }

  return (
      <div className={classes.wrapper}>
          <h1 className={classes.timerCaption}>Timer</h1>
          <div className={classes.settingsContainer}>
              <Timer interalValue={interalValue} startStop={startStop} reset={reset} />
              <div className={classes.controls}>
                  <Button onClick={startStopToggle}>
                      {startStop ? <p>stop</p> : <p>start</p>}
                  </Button>
                  {!startStop && <Button onClick={resetTimer}>reset</Button>}
              </div>
          </div>
          <div className={classes.timerModes}>
              <Button onClick={() => handleClick(10)}>10ms</Button>
              <Button onClick={() => handleClick(100)}>100ms</Button>
              <Button onClick={() => handleClick(500)}>500ms</Button>
              <Button onClick={() => handleClick(1000)}>1000ms</Button>
          </div>
      </div>
  )
}


export default UseEffectTraining
