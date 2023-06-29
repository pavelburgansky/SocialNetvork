import React from 'react'
import  classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { setAuth,setisLogin } from '../../redux/authReducer'
import { authentificationUser } from '../../redux/authReducer'
export default function Header(props) {


    // const [authData,setAuthData]=React.useState(props.state)
    // const [isLogin,setIsLogin]=React.useState(1)
    debugger
    let isLogin = useSelector((state)=>state.auth.isLogin)
    let login = useSelector((state)=>state.auth.login)  
    
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(authentificationUser())
    },[dispatch])
      
    return (
        <header className={classes.header}>
            <img src='https://www.freepngimg.com/thumb/team/141690-logo-fc-barcelona-free-photo.png' />
            <div className={classes.loginBlock}>
                {isLogin?<NavLink to={'/login'}>Login</NavLink>:login}
            </div>
        </header>
    )
}
