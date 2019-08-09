import React, { Component } from "react";
import { connect } from "react-redux";
import '../style/Profile.css'
import {Redirect} from 'react-router-dom'
import { Pinjam } from "../Publics/Actions/book";


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName : localStorage.fullName,
            email : localStorage.email,
            image : localStorage.image,
            book: [],
            idCard : localStorage.idCard

        }
    }

changehandle = (data) => {
    const name = data.currentTarget.name
    const val = data.currentTarget.value
    this.state[name] = val
    this.setState({
        fullName: this.state.fullName
    })
}

 pilih(ee) {
    const selectedFile = ee.target.files[0]
    const reader = new FileReader()
    const image = document.getElementById('foto')

    reader.onload = (eee) => {
        image.src = eee.target.result
    }
    reader.readAsDataURL(selectedFile)
}

componentDidMount = async () => {
   await this.props.dispatch(Pinjam(this.state.idCard))
    this.setState({
        book: this.props.book
    })
}

    render() {
        const pinjam = this.state.book
        console.log(pinjam)
        return (
            
           !localStorage.token ? 
           <>
           {alert('Harap Login Terlebih Dahulu')}
           <Redirect to={'/book'}/>
           </> 
           :
<>
            <div className="profil">
                <div className="judul">
                    Profile
                </div>

                <div>
                <img id="foto" src = {this.state.image} />
                    <input type="file" id="images" className="foto" onChange={(ee) => this.pilih(ee)} />
                    
                </div>

                <div className="from">
                    <input type="text" className="user" name="fullName" required id="fullName"
                    value = {this.state.fullName} onChange = {this.changehandle}
                 />
                </div>
                <div className="from">
                    <input type="text" className="user" name="email" required id="email"
                    value = {this.state.email} onChange = {this.changehandle}
                 />
                </div>
                <button className="simpan">Simpan</button>
            </div>

            <table 
             style={{marginTop: '20px', marginLeft: '50%',transform: 'translateX(-50%)', width: '1300px'}}>
                <tr style={{}}>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>Nama Buku</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>No KTP</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>Tanggal Pinjam</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>Batas Pinjam</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>Tanggal Kembali</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>Denda</td>
                </tr>
                {pinjam.listPinjam && pinjam.listPinjam.length > 0 ? pinjam.listPinjam.map((item) => {
                    return (
                    <tr> 
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>{item.nameBook}</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>{item.idCard}</td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>{item.tglPinjam} </td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>{item.tglKadarluarsa} </td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>{item.tglKembali ? item.tglKembali : 'Belum Dikembalikan'} </td>
                    <td style={{border: '1px solid black',padding: '20px 30px'}}>{item.denda ? item.denda : '-'} </td>
                </tr>
                )
                }) : '' }
                
            </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        login: state.login,
        book: state.book
    }
}

export default connect(mapStateToProps) (Profile)