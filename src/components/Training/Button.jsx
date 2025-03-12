import React, { useState } from 'react'
import classes from './Button.module.css'
function Button(props) {
    return (
        <div>
            <button className={classes.buttonTraining} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button
