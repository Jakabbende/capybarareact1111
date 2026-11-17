import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Products from './pages/Products'
import Reviews from './pages/Reviews'
import Gyakorlas from './pages/Gyakorlas'

function App() {

  const[bgcolor,setbgcolor] = useState()
  let path = window.location.pathname

  return (
    <>
     <Header setbg = {setbgcolor}/>

     {path == "/" && <Home bgcolor = {bgcolor}/>}
     {path == "/About.jsx" && <About/>}
     {path == "/Products.jsx" && <Products/>}
     {path == "/Reviews.jsx" && <Reviews/>}
     {path == "/Gyakorlas.jsx" && <Gyakorlas/>}
     
     
     <footer>
        <p>All right reserved type shii</p>
     </footer>
    </>
  )
}

export default App
