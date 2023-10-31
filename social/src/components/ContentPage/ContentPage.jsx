import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './ContentPage.css';
const ContentPage = (props)=>{

    return(
        <div className='content-page'>

        <Routes>
            <Route path='/profile' element={
                <Profile  
                    profilePage = {props.state.profilePage}
                    dispatch = {props.dispatch}
                />} 
            /> 
            <Route path='/dialogs' element={
                <Messages  
                    dialogsPage = {props.state.dialogsPage}
                    dispatch = {props.dispatch}
                    />}
            />
        </Routes>
        </div>
    )
}

export default ContentPage