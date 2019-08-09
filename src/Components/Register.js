import React, { Component } from 'react'
import '../style/Register.css'
import {connect} from 'react-redux'
import { register } from '../Publics/Actions/login'
import { Link } from 'react-router-dom'
import { async } from 'q';


class Register extends Component {

    addRegister = async () => {
        this.props.dispatch(register({
            email : document.getElementById('email').value,
            fullName : document.getElementById('name').value,
            password : document.getElementById('pass').value
        }))
        document.getElementById('email').value = ''
        document.getElementById('name').value = ''
        document.getElementById('pass').value = ''
        if(this.props.login.login.code === 'ER_DUP_ENTRY') {
            alert('Email sudah terdaftar',<Link to={'/register'} />)
        } else {
            alert('Register Success', <Link to={'/book'} /> )
        }
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
                    <button onClick={this.addRegister} style = {{
                        marginTop: '20px',
                        width: '100px',
                        height: '30px',
                        borderRadius: '7px',
                        outline: 'none'
                    }}>Daftar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps) (Register)