import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <h1 style={{color : "white"}} className='p-1'>Capybara Shop</h1>
        <Link to="/" className='p-3'><button className='btn btn-outline-success me-2'>Főoldal</button></Link>
        <Link to="/rolunk" className='p-1'><button className='btn btn-outline-success me-2'>Rólunk</button></Link>
        <Link to="/termekek" className='p-1'><button className='btn btn-outline-success me-2'>Termékek</button></Link>
        <Link to="/ertekelesek" className='p-1'><button className='btn btn-outline-success me-2'>Értékelés</button></Link>
      </nav>
    </div>
  )
}
