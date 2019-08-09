import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import {Redirect} from 'react-router-dom'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect : ''
    }
  }

logout =  () => {
  alert('Logout Berhasil !!')
  this.setState({
    redirect: <Redirect to={'/book'} />
  })
  localStorage.clear()
}

  render () {
    return (
      <div id='header'>
        {this.state.redirect}
        <Link to={'/book'}><span>BOOKS</span></Link>
        <div style = {{
          float: 'right'
        }}>
          {localStorage.token ? <Link style={{
            fontSize: '17px',
            marginRight:'20px'
            }} to={'/profile'}>{localStorage.fullName} </Link> : '' }
          
        {localStorage.token ?  <button onClick={this.logout} style = {{
            borderRadius: '7px',
            width: '100px',
            height: '35px',
            outline: 'none',
          }}>Keluar</button> : <Link to={'/login'}> <button style = {{
            borderRadius: '7px',
            width: '100px',
            height: '35px',
            outline: 'none',
          }}>Masuk</button> </Link>}
         

           
          
        </div>
      </div>
    )
  }
}

export default Nav
