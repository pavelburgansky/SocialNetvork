import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPost, updateNewPostText} from '../../../redux/profileReducer'
import { useDispatch, useSelector } from 'react-redux'

const MyPosts = (props) => {
    
    const dispatch = useDispatch()
    let newPostText = useSelector((state)=>state.profile.newPostText)
    let postsData = useSelector((state)=>state.profile.postsData)
    let PostElem = postsData.map(el => <Post message={el.message} like={el.likePost} />)

    let newPostElement = React.createRef()
    let onAddPost = () => {
        dispatch(addPost())
        //props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        dispatch(updateNewPostText(text))
        //props.dispatch(changeTextActionCreator(text));

    }

    return (
        <div>
            <div className={`${classes.item} ${classes.golden}`}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea ref={newPostElement}
                         placeholder='Enter your message' 
                         onChange={onPostChange} value={newPostText} />
                    </div>

                    <div>
                        <button onClick={onAddPost}> add post</button>
                    </div>
                </div>
            </div>
            
            <div className={classes.posts}>
                {PostElem}
            </div>


        </div>
    )
}
export default MyPosts

