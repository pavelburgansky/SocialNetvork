import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./DialogItem.module.css"
const DialogItem = (props)=>{
    return(
        <div className={classes.item}>
        <NavLink to={"/dialogs/"+ props.id}><img src={props.img} />{props.name}</NavLink> 
       </div>
        
    )
}

export default DialogItem