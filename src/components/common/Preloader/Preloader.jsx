import React from 'react'
import preloader from './../images/preloader.gif'
import classes from './Preloader.module.css'
export default function Preloader() {
  return (
    <div className={classes.background}>
            <img src={preloader}></img>
    </div>
  )
}
