import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Products from './pages/Products'
import Reviews from './pages/Reviews'
import { Routes } from 'react-router-dom'

function App() {

  let path = window.location.pathname

  return (
    <>
     <Header/>

     {/* {path == "/" && <Home/>}
     {path == "/About.jsx" && <About/>}
     {path == "/Products.jsx" && <Products/>}
     {path == "/Reviews.jsx" && <Reviews/>} */}
     
     <Routes>
      
     </Routes>
     
     <footer>
        <p>All right reserved type shii</p>
     </footer>
    </>
  )
}

export default App
