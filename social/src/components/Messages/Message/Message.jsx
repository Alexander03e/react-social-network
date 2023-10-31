import '../Messages.css'

const Message =(props) =>{

    

    return (
        <div className="message">
            <div className="message__id">

            </div>
            <div className="message__body">
                <div className="message__info">
                    <p className="message__content">
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Message;