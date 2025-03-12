import React from 'react'
import classes from "./Users.module.css"
import { useEffect,useCallback } from 'react'
import Preloader from './../common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { useDispatch ,useSelector } from "react-redux"
import { fetchUsers,followSuccess,unfollowSuccess } from '../../redux/usersReducer'
let Users = ()=>{
    const dispatch = useDispatch()
    const usersData = useSelector((state) => state.usersPage.usersData)
    const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount)
    const pagesize = useSelector((state) => state.usersPage.pagesize)
    const currentPage = useSelector((state) => state.usersPage.currentPage)
    const followingInProgress = useSelector(state=>state.usersPage.followingInProgress)
    const isFetching = useSelector(state=>state.usersPage.isFetching)

    useEffect(()=>{
      dispatch(fetchUsers({ currentPage, pagesize }))
    }
    ,[dispatch,currentPage, pagesize])  

    const onPagesChanged = useCallback((currentPage) => {
      dispatch(fetchUsers({currentPage, pagesize}))
      },[dispatch,currentPage, pagesize])

      const followClick = useCallback((userId) => {
        dispatch(followSuccess({userId}))
        },[dispatch])

        const unfollowClick = useCallback((userId) => {
          dispatch(unfollowSuccess({userId}))
          },[dispatch])

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
   {isFetching ? <Preloader/> : null}
    <div>
      {slicedPages.map(u=>{
        return (
        <span className={(currentPage===u?classes.selectedPage:classes.pageNumber)+' '+ classes.curs}
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
        }
        </div>
      </span>
      <span>
        <div className={classes.username}>
          {u.name}
        </div>
        <div>
          {u.status}
        </div>
      </span>
    </div>
    )
  }
  </div>
}
export default Users;