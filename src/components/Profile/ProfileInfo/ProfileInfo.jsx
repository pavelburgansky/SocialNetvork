import React from 'react'
import  classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
export default function ProfileInfo(props) {
    
    if (!props.profile){
        return null
    }
    // let qwe =props.profile.photos[0]

    // if (props.profile.photos.large===null){
    //     props.profile.photos.large='https://listelist.com/wp-content/uploads/2020/06/anon.jpg'
    // }
    return ( 
    <div>
        <div className={classes.item}>
            {/* {props.profile.photos.large?<img src={props.profile.photos.large}/>:<img src='https://listelist.com/wp-content/uploads/2020/06/anon.jpg'/>} */}
        </div>
        <div className={classes.item}>
            ava+ description
            <img src={null}></img>
            <div className={classes.profile}>
               Обо мне:{props.profile.aboutMe}  
                <div>
                Имя: {props.profile.fullName} 
                </div>

            </div>
        </div>
    </div>

    )
}
