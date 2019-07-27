import React, { Component } from 'react'
import '../style/Login.css'
import {login} from '../Publics/Actions/login'
import {connect} from 'react-redux'
import ModalAlert from '../Components/ModalAlert'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: ""
        }
    }
    setModal = ()=>{
        this.setState({modal:""})
    }

    login = () => {
        this.props.dispatch(login({
            email : document.getElementById('email').value,
            password: document.getElementById('password').value
        }))
        if (this.props.login.login === 'Password Salah') {
            const modal = <ModalAlert show={true} pesan={"Password Salah"} error={true} link={"/login"} setModal={this.setModal} />
            this.setState({ modal: modal })
        } else if (this.props.login.login === "Email Tidak Terdaftar") {
            const modal = <ModalAlert show={true} pesan={"Email Tidak Terdaftar"} error={true} link={"/login"} setModal={this.setModal} />
            this.setState({ modal: modal })
        } else {
            const modal = <ModalAlert show={true} pesan={"Login Sukses"} success={true} link={"/book"} setModal={this.setModal}/>
            this.setState({ modal: modal })
        }
    }

    render() {

        return(
            <div className="container">
                {/* {this.state.modal} */}
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