import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home"
import Book from './component/Book'
import Foot from './component/Foot'
import About from './component/About'
import Footer from './component/Footer'
import Menu from './component/Menu'




function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path="/book" Component={Book} />
      <Route path="/about" Component={About} />
      <Route path='/menu' Component={Menu}/>
      
      </Routes>
      {/* <Footer/> */}
      <Foot/>
    
      
    </>
  )
}

export default App
