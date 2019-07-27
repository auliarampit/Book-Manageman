import React, { Component } from 'react'
import '../style/Register.css'
import {connect} from 'react-redux'
import { register } from '../Publics/Actions/login'
import { Link } from 'react-router-dom'


class Register extends Component {

    addRegister = () => {
        this.props.dispatch(register({
            email : document.getElementById('email').value,
            fullName : document.getElementById('name').value,
            password : document.getElementById('pass').value
        }))
        document.getElementById('email').value = ''
        document.getElementById('name').value = ''
        document.getElementById('pass').value = ''
    }

    render() {
        return (
            <div className="register">
                <div>
                    <p style={{
                        marginLeft: '110px',
                        marginTop: '50px',
                        fontSize: '25pt'
                    }}>Silahkan mendaftar</p>
                </div>

                <div className="form">
                    <div>
                        <input className="user" type="text" placeholder="masukan@gmail.com"
                        id={'email'}  required/>
                    </div>
                    <div>
                        <input className="name" type="text" placeholder="Masukkan nama anda"
                        id={'name'}  required/>
                    </div>
                    <div>
                        <input className="pass" type="password" placeholder="Masukkan password"
                        id={'pass'}  required/>
                        
                    </div>
                    <Link to={'/login'}><button onClick={this.addRegister} style = {{
                        marginTop: '20px',
                        width: '100px',
                        height: '30px',
                        borderRadius: '7px',
                        outline: 'none'
                    }}>Daftar</button> </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        register: state.register
    }
}

export default connect(mapStateToProps) (Register)