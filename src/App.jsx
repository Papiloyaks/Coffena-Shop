import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home"
import Book from './component/Book'
import Foot from './component/Foot'



function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path="/book" Component={Book} />
      </Routes>
      <Foot/>
    
      
    </>
  )
}

export default App
