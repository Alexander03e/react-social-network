import './Profile.css'
import {Avatar} from './About/Avatar'
import { ProfileInfo } from './About/ProfileInfo'
import { Posts } from './Posts/Posts'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/state'


const Profile = (props) => {
    
    let newPostElement = React.createRef()
    
    let addNewPost = () =>{
        props.dispatch(addPostActionCreator())  
    }
    
    let changingField=()=>{
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        
    } 
    
    return (    
        <div className="profile">
            <Avatar />
            <ProfileInfo />
            <div className="posts">
                <div className="posts__add-wrapper">

                    <textarea ref = {newPostElement} onChange = {changingField} value ={props.profilePage.newPostText}className='posts__add-post-field'></textarea>
                    <button onClick = {addNewPost} className='posts__add-post-btn'>Добавить пост</button>

                </div>
                <Posts posts = {props.profilePage.posts}/>  
            </div>
            
        </div>
    )
}

export default Profile