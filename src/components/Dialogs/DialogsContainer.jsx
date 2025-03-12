import React from "react"
import Dialogs from "./Dialogs"
import { addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogsReducer"
import { useDispatch ,useSelector } from "react-redux"
const DialogsContainer = (props) => {
    
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.messagespage)
    
    let submitMessage = () => {   
        dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text) => {

        dispatch(changeMessageTextActionCreator(text));

    }

    return (
        <Dialogs updateDialogsText = {onMessageChange}
         addMessage = {submitMessage} 
         messagespage = {auth}
         />
    )
}
export default DialogsContainer