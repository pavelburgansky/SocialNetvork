import React from 'react'
import { addPostActionCreator, changeTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { useSelector, useDispatch } from 'react-redux'
import { addPost,updateNewPostText } from '../../../redux/profileReducer'
// const postsData = [
//     {
//         id:1,
//         message:'Приветикс',
//         likePost:0     
//     },
//     {
//         id:2,
//         message:'Здарова вуй',
//         likePost:30 
//     },
//     {
//         id:3,
//         message:'Здарова Стээээс',
//         likePost:777 
//     }
// ]



// const MyPostsContainer = (props) => {
 
//     const state = useSelector((state) => state.profile)


//     return (
//         <MyPosts updateNewPostText={updateNewPostText}
//          addPost={addPost}
//          postsData={state.postsData}
//           newPostText = {state.newPostText}
//            />
//     )
// }
// export default MyPostsContainer

