import React from 'react'
import  classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../common/Preloader/Preloader'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Profile = (props)=>{
    let isLogin = useSelector((state)=>state.auth.isLogin)
    // let navigate = useNavigate()
    // useEffect(()=>{
    //     if(isLogin === 1){
    //     return navigate("/login")
    // }
    // }, [isLogin])
    return(
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPosts />
        </div>
    )
} 
export default Profile
