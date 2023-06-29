import React from 'react'
import  classes from './Profile.module.css'
import Profile from './Profile'
import axios from 'axios'
import { useEffect } from 'react'
import Preloader from '../common/Preloader/Preloader'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {setProfileData, toggleIsFetching} from '../../redux/profileReducer'
import { getProfile } from '../../redux/profileReducer'
const ProfileContiner = (props)=>{
    let {userId} = useParams()
    if (!userId){
        userId=2
    }
    let dispatch = useDispatch()
    let profileData = useSelector((state)=>state.profile.profileData)
    let isFetching = useSelector((state)=>state.profile.isFetching)
    useEffect(()=>{
        dispatch(getProfile({userId}))
        },[dispatch,userId])
    return(
       <div className={classes.profile}>
         {isFetching ? <Preloader/> : null} 
            <Profile profile={profileData}/>

        </div>
    )
}
export default ProfileContiner
