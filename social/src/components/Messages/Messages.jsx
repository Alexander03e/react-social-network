import './Messages.css'
import Message from './Message/Message'
import { Form, NavLink, Route, Routes } from 'react-router-dom'
import React from 'react'


const MessageUser = (props) =>{

    return (
        <div className='messages__user'>
            <img src="" alt="foto" />
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


let messageAreaRef = React.createRef()
const MessageAddForm = (props) => {
    
    let onChangeField = () => {
        let newMessage = messageAreaRef.current.value
        props.dispatch({type: 'UPDATE-MESSAGE-FIELD', newMessage})
    }
    
    let sendMessage = () => {
       
        props.dispatch({type: 'SEND-MESSAGE'})
    }
    
    return (
        <div className="messages__send-form">
            <textarea ref = {messageAreaRef} className='messages__text-field' value = {props.dialogsPage.newMessageText} onChange = {onChangeField}></textarea>
            <button className='messages__send-btn' onClick = {sendMessage}>Отправить сообщение</button>
        </div>
        
    )
}
const Messages = (props) =>{
    
    let userComments = props.dialogsPage.dialogs.map((item) => {
        return(
            <MessageUser id={item.id} name={item.name} />
            )
        }
    )   
    let allMessages = props.dialogsPage.messages.map((item) => {
        return (
            <Message message = {item.message} />
        )
    })
    return (
        <div className="messages">
            <div className="messages__user-list">
                {userComments}
            </div>
            <div className="messages__message">
                {allMessages}
                <MessageAddForm dialogsPage = {props.dialogsPage} dispatch = {props.dispatch} />
            </div>
        </div>
    )
}
export default Messages