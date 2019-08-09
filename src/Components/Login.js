import React, { Component } from 'react'
import '../style/Login.css'
import {login} from '../Publics/Actions/login'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: ''
        }
    }


    login = async () => {
        await this.props.dispatch(login({
            email : document.getElementById('email').value,
            password: document.getElementById('password').value
        }))
        console.log(this.props.login.login)
        if (this.props.login.login === 'Password Salah') {
            alert('Password anda salah')
        } else if (this.props.login.login === "Email Tidak Terdaftar") {
            alert('Email Tidak Terdaftar')
        } else {
            alert(`Selamat Datang ${localStorage.fullName}`) 
            this.setState({
                redirect: <Redirect to={'/book'} />
            })
        }
    }

    render() {

        return(
            <div className="container">
                {this.state.redirect}
                <div>
                    <p style = {{
                        textAlign: 'center',
                        paddingTop: '90px',
                        fontSize: '30px',
                        fontWeight: 'bold',
                    }}>Silahkan Login</p>
                </div>
                    
                <div style ={{
                    marginLeft: '22%',
                    marginTop: '90px',
                }}>
                    <div>
                         <input className= "email" type="text" placeholder="Masukkan Email" id={'email'}/>
                    </div>

                    <div>
                         <input className="password" type="password" placeholder="Masukkan Password" id={'password'}/>
                    </div>

                    <div>
                        <button className="signin" onClick={this.login}>Masuk</button>
                        <p style = {{
                            marginLeft: '25px'
                        }}>Belum punya akun? <a href="/register">Daftar sekarang</a> </p>
                    </div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        login: state.login
    }
}

export default connect(mapStateToProps) (Login)