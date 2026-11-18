import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Products from './pages/Products'
import Reviews from './pages/Reviews'
import { Route, Routes } from 'react-router-dom'

function App() {

  // let path = window.location.pathname

  return (
    <>
      <Header />

      {/* {path == "/" && <Home/>}
     {path == "/About.jsx" && <About/>}
     {path == "/Products.jsx" && <Products/>}
     {path == "/Reviews.jsx" && <Reviews/>} */}

      <div style={{ paddingTop: "110px" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rolunk' element={<About />} />
          <Route path='/termekek' element={<Products />} />
          <Route path='/ertekelesek' element={<Reviews />} />
          {/* Ide lehetne egy errorpage-t és azt hozná be */}
          <Route path='*' element={<Home />} />
        </Routes>

      </div>

      <footer className='p-1' style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', textAlign: 'center', background: '#f3ead9' }}>
        <p style={{ fontWeight: "bolder" }}>@2026 All right reserved type shii</p>
      </footer>
    </>
  )
}

export default App
