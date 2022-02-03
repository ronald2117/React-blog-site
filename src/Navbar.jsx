import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/">Ron Blogz</Link></h1>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">New Blog</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;