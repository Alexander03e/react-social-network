let rerenderUI = () =>{
    console.log('true')
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'



export let store = {
    _state: {
        _subscriber(){
            console.log('no subscribers')
        },
        profilePage: {
            posts: [
                {id:1, text: 'first post'},
            ],
            newPostText: 'My new post'
        },
        dialogsPage: {
            dialogs: [
                {id:1, name: 'Sasha'},
                {id:2, name: 'Vadim'},
                {id:3, name: 'VADIS'}
            ],
            messages: [
                {id:1, message:'hello world'},
                {id:2, message:'hrllloo'}
            ],
            newMessageText: 'new message'
        }
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._subscriber = observer;
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id:5,
                text: this._state.profilePage.newPostText
            } 
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._subscriber()
            // this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            console.log(action.newText)
            this._subscriber();
            // this._updateNewPostText(action.newText)
        } else if(action.type === 'SEND-MESSAGE'){
            let newMessage = {
                id:3,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._subscriber()
        } else if(action.type === 'UPDATE-MESSAGE-FIELD'){
            
            this._state.dialogsPage.newMessageText = action.newMessage
            this._subscriber()
        }
    }
}

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

store.subscribe(()=>{
    let state = store.getState();
    rerenderUI(state)
})
window.state=store.getState();