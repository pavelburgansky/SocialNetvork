import axios from 'axios'
import React from 'react'
import classes from "./Users.module.css"
import { useState,useEffect,useCallback } from 'react'
import { current } from '@reduxjs/toolkit'
import Preloader from './../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { getUsers } from '../api/apiUsers/getUsers'
import { unfollowUser } from '../api/apiUsers/unfollowUser'
import { followUser } from '../api/apiUsers/followUser'
import {setIsFetchingActionCreator} from '../../redux/usersReducer'
import { useDispatch ,useSelector } from "react-redux"

import { fetchUsers,followSuccess,unfollowSuccess } from '../../redux/usersReducer'
import { follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleFollowingInProgress,
  setTotalCount,
  toggleIsFetching } from '../../redux/usersReducer'
let Users = (props)=>{
    const dispatch = useDispatch()
    const usersData = useSelector((state) => state.usersPage.usersData)
    const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount)
    const pagesize = useSelector((state) => state.usersPage.pagesize)
    const currentPage = useSelector((state) => state.usersPage.currentPage)
    const followingInProgress = useSelector(state=>state.usersPage.followingInProgress)
    const isFetching = useSelector(state=>state.usersPage.isFetching)
    let{a} = {a:5,b:'qwe'}
    console.log(a);
  //const [isFetching,setIsFetching] = useState(true)
  
  //const ifFetchingRef = React.useRef(isFetching)
  //const [usersProfileData,setUsersProfileData]=useState([])
  //let state = props.usersData
  // const [usersData,setUsersData]=useState(props.usersData)
   //const [totalUsersCountData,setTotalUsersCount] = useState(0)
   //const [isFollow,setIsFollow] =useState(false)
//    const fetchUsers = createAsyncThunk(
//     'users/fetchUsers',
//     async ({ currentPage, pagesize },thunkAPI) => {
//     thunkAPI.dispatch(props.toggleIsFetching(true));
//     const response = await getUsers(currentPage,pagesize)
//     debugger
//     thunkAPI.dispatch(props.toggleIsFetching(false));
//     thunkAPI.dispatch(props.setUsers(response.items))
//     thunkAPI.dispatch(props.setTotalUsersCount(response.totalCount))
//   }
// ); 



    useEffect(()=>{
      dispatch(fetchUsers({ currentPage, pagesize }))
    }
    ,[dispatch,currentPage, pagesize])
    //props.fetchUsers(props.currentPage,props.pagesize)
  

    const onPagesChanged = useCallback((currentPage) => {
      dispatch(fetchUsers({currentPage, pagesize}))
      },[dispatch,currentPage, pagesize])

      const followClick = useCallback((userId) => {
        dispatch(followSuccess({userId}))
        },[dispatch])

        const unfollowClick = useCallback((userId) => {
          dispatch(unfollowSuccess({userId}))
          },[dispatch])

//     if (state.length===0){
//     axios.get(url).then(response=>{    
//     props.setUsers(response.data.items)
//   }) 
// }
  // let onPagesChanged = (pageNumber)=>{
  //     props.setCurrentPage(pageNumber)
  //     if (state.length===0){
  //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pagesize}`).then(response=>{    
  //     props.setUsers(response.data.items)
  //   }) 
  // }
  // } 

  let pagesCount = Math.ceil(totalUsersCount / pagesize) 
  
  let pages =[]

  for (let i = 1; i<=pagesCount;i++){
    pages.push(i)
     
  }

  let curP = currentPage;
  let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
  let curPL = curP + 5;
  let slicedPages = pages.slice( curPF, curPL);
  
  //!!!!!!!!!!!!!!!!!RETURN STATE!!!!!!!!!!!!!!!!!!!!!!!!

  return <div className={classes.item}>
  {/* {isFollow
    ?<button className={classes.grey} onClick={()=>setIsFollow(!isFollow)}>unfollow</button>
    :<button className={classes.red} onClick={()=>setIsFollow(!isFollow)}>follow</button>} */}
   {isFetching ? <Preloader/> : null}
    <div>
      {slicedPages.map(u=>{
        return (
        <span className={(currentPage===u? classes.selectedPage:'')+' '+ classes.curs}
        onClick={()=>onPagesChanged(u)}> {u} </span>)
        })}
    </div>
    

  {
    
    
    usersData.map(u=>
    <div key={u.id}>
      <span>
        <NavLink to={'/profile/' + u.id}><div>
          <img ></img>
        </div></NavLink>      
        <div>
          {
          u.followed
          ?<button disabled={followingInProgress.some(id=>id===u.id)} className={classes.grey} onClick={()=>{
           unfollowClick(u.id)
        }}>
          unfollow</button>

          :<button disabled={followingInProgress.some(id=>id===u.id)} className={classes.red}  onClick={()=>{
            followClick(u.id)
        }}>
          follow</button>
          

        //   u.followed
        //   ?<button disabled={followingInProgress.some(id=>id===u.id)} className={classes.grey} onClick={()=>{
        //    unfollowClick(u.id)
        // }}>
        //   unfollow</button>

        //   :<button disabled={followingInProgress.some(id=>id===u.id)} className={classes.red}  onClick={()=>{
        //     followClick(u.id)
        // }}>
        //   follow</button>
          


          // ?<button onClick={()=>{ axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
          //   withCredentials:true,
          //   headers:{"API-KEY":"03639148-a250-47d2-8b64-d5eb439d20f4"}
          // }).then(response=>{
          //   debugger
          //   if(response.data.resultCode===0){
          //     props.unfollow(u.id)
          //   }
          // })}}
          // className={classes.grey}>unfollow</button>
          // :<button onClick={()=>{
          //   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
          //   {
          //     withCredentials:true,
          //     headers:{"API-KEY":"03639148-a250-47d2-8b64-d5eb439d20f4"}
          //   }).then(response=>{
          //     debugger 
          //     if(response.data.resultCode===0){
          //       props.follow(u.id)
          //     }
          //   })

          // }}
          // className={classes.red}>follow</button>
        }



        </div>
      </span>
      <span>
        <div>
          {u.name}
        </div>
        <div>
          {u.status}
        </div>
          {/* <div>{u.location.city}</div> */}
          {/* <div>{u.location.country}</div> */}
      </span>
    </div>
    )
  }
  </div>
}
export default Users;