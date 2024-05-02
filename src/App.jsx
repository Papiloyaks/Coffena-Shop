import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home"
import Book from './component/Book'
import Foot from './component/Foot'
import About from './component/About'
import Menu from './component/Menu'
import Contact from './component/Contact'




function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path="/book" Component={Book} />
      <Route path="/about" Component={About} />
      <Route path='/menu' Component={Menu}/>
      <Route path='/contact' Component={Contact}/>

      
      </Routes>
      {/* <Footer/> */}
      <Foot/>
    
      
    </>
  )
}

export default App
