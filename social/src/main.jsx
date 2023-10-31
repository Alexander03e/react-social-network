import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  { store } from './redux/state.jsx'
// import { addPost, updateNewPostText } from './redux/state.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
export let rerenderUI = (state) => {
  root.render(
    <React.StrictMode>
      <App 
        state = {store.getState()}
        
        dispatch = {store.dispatch.bind(store)}
        // addPost = {store.addPost}
        // updateNewPostText = {store.updateNewPostText}
      />
    </React.StrictMode>,
  )
}

rerenderUI(store.getState())

store.subscribe(rerenderUI)