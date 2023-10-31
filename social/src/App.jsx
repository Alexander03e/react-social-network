import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Body from "./components/Body/Body"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/style.css'
function App(props) {
  return(
  <div className="App"> 
    <BrowserRouter>
      <Header />
      <Body 
        // state = {props.state} 
        // addPost = {props.addPost}
        // updateNewPostText = {props.updateNewPostText}
        state = {props.state}
        dispatch = {props.dispatch}
      />
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App
