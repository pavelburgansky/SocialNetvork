import React, { useEffect, useState } from 'react'
import Users from './Users';
//import { followActionCreator, setUsersActionCreator, unfollowActionCreator,setCurrentPageActionCreator,toggleIsFollowingActionCreator,setIsFetchingActionCreator,setTotalUsersCountActionCreator} from '../../redux/usersReducer';
import { useDispatch ,useSelector } from "react-redux"
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from '../api/apiUsers/getUsers'
// const UserContainer = (props)=>{
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state.usersPage.usersData)
    // const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount)
    // const pagesize = useSelector((state) => state.usersPage.pagesize)
    // const currentPage = useSelector((state) => state.usersPage.currentPage)
    // const followingInProgress = useSelector(state=>state.usersPage.followingInProgress)
    // const isFetching = useSelector(state=>state.usersPage.isFetching) 
    // // let followUser = (userId)=>{

    // //     dispatch(followActionCreator(userId))
    // // }
    // // let unfollowUser = (userId)=>{
        
    // //     dispatch(unfollowActionCreator(userId))
    // // }
    // // let setUsers = (users)=>{

    // //     dispatch(setUsersActionCreator(users))
    // // }
    // // let setCurrentPage = (pageNumber)=>{
        
    // //     dispatch(setCurrentPageActionCreator(pageNumber))
    // // }
    // // let setTotalUsersCount = (totalCount)=>{
        
    // //     dispatch(setTotalUsersCountActionCreator(totalCount))
    // // }
    // // let toggleIsFollowing = (isFollowing,userId)=>{
    // //     dispatch(toggleIsFollowingActionCreator({isFollowing,userId}))
    // // }
    // // let toggleIsFetching = (isFetching) =>{
    // //      dispatch(setIsFetchingActionCreator(isFetching))
    // }
//     return <>

//             <Users follow={followUser}
//                 unfollow={unfollowUser}
//                 setUsers={setUsers}
//                 setTotalUsersCount={setTotalUsersCount}
//                 toggleIsFollowing={toggleIsFollowing}
//                 followingInProgress={followingInProgress}
//                 usersData={state}               
//                 totalUsersCount = {totalUsersCount}
//                 pagesize = {pagesize}
//                 currentPage= {currentPage}
//                 setCurrentPage={setCurrentPage}
//                 toggleIsFetching = {toggleIsFetching}
//                 isFetching={isFetching}
                
//             />
//         </>
    
// }

// export default UserContainer