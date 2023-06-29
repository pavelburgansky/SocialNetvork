import React from "react"
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react"
const Dialogs = (props) => {
    let isLogin = useSelector((state)=>state.auth.isLogin)
    let navigate = useNavigate()
    let state = props.messagespage
    let submitMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateDialogsText(text)
    }
    let dialogElem = state.dialogData.map(el => <DialogItem name={el.name} id={el.id} img={el.img} />)
    let messageElem = state.messagesData.map(el => <Message message={el.message} />)
    let newMessageText = state.newMessageText
    useEffect(()=>{
        if(isLogin === 1){
        return navigate("/login")
    }
    }, [isLogin])

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElem}
            </div>
            <div className={classes.messages}>
                {messageElem}

                <div>
                    <div>
                        <textarea
                                    placeholder='Enter your message'
                                    onChange={onMessageChange}
                                    value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={submitMessage}>Отправить!</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Dialogs