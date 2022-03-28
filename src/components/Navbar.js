import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className=''>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark sticky  py-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
               
              </li>
              
            </ul>
            </div>
            <Link className=" linkTop px-5 light" aria-current="page" to="/dashboard">{props.username}</Link>
        </div>
      </nav>
        
        </div>
      )
}

export default Navbar