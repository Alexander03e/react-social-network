import './Posts.css'
import { Post } from './Post'

export const Posts = (props) => {
    // let postData = [
    //     {id:1, text: 'first post'},
    //     {id:2, text: 'sec post'}
    // ]
    
    let allPosts = props.posts.map((item) => {
        return(
            <Post id = {item.id} text={item.text} />    
        )
    }
    )
    return (
        <div className="posts__list">
            {allPosts}
        </div>
    )
}