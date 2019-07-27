import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'

class Nav extends Component {
  render () {
    return (
      <div id='header'>
        <Link to={'/book'}><span>BOOKS</span></Link>
        <div style = {{
          float: 'right'
        }}>
         <Link to={'/login'}> <button style = {{
            borderRadius: '7px',
            width: '100px',
            height: '35px',
            outline: 'none',
          }}>Masuk</button></Link>
        </div>
      </div>
    )
  }
}

export default Nav
