import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
const setActive = ({ isActive }) => isActive ? classes.activeLink : '';

export default function Sidebar() { 
    return (
        <aside className={classes.aside}>
            <div className={classes.item}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className={setActive}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/training' className={setActive}>Training</NavLink>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
            <div className={classes.item}>
                <a>friends</a>
                <div className={classes.item}>
                    <div className={classes.inlinefriends}>
                        <div><img src='' /></div> <div>Саша</div>
                    </div>

                    <div className={classes.inlinefriends}>
                        <div><img src='' /></div>
                        <div>Паша</div>
                    </div>
                    <div className={classes.inlinefriends}>
                        <div><img src='' /></div>
                        <div>Маша</div>
                    </div>
                </div>

            </div>

        </aside>

    )
}