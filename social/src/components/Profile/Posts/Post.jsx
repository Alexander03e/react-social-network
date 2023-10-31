import './Posts.css'

export const Post = (props) => {

    
    return (
        <div className="posts__item">
            <div className="posts__item-body">
                {props.text}
            </div>
        </div>
    )
}