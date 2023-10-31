import './Body.css'
import Nav from '../Nav/Nav';
import ContentPage from '../ContentPage/ContentPage';
const Body=(props)=>{
    
    return(
        <div className="main">
            <div className="container">
                <div className="main__body">
                    <Nav />
                    <ContentPage 
                        // state = {props.state} 
                        // addPost={props.addPost}
                        // updateNewPostText = {props.updateNewPostText}
                        state = {props.state}
                        dispatch = {props.dispatch}
                    />
                </div>
            </div>
        </div>
    )
}

export default Body;