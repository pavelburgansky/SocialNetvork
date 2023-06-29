import React from 'react'
import  classes from './Header.module.css'
import Header from './Header'
import { useDispatch ,useSelector } from "react-redux"
import { authActionCreator } from '../../redux/authReducer'
export default function HeaderContainer() {
    
    return (
       <Header />
    )
}
 