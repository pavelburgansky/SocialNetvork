import React from 'react'
import  classes from './Post.module.css'
const Post = (props)=>{
    return(
        <div className={classes.item}>
            <img src='https://img.fonwall.ru/o/94/258124.jpg' />
            {props.message}
            <div>
                like={props.like}
            </div>
        </div>

    )
}
export default Post
