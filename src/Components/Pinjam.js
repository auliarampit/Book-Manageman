import React, { Component } from 'react'
// import '../style/pinjam.css'
import { connect } from 'react-redux'
import { postPinjam } from '../Publics/Actions/book'


class ModalPinjam extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataPinjam : this.props.book.bookList.filter((item) => item.idBook == 
            this.props.match.params.bookid),
            
        }
    }

    addPinjam = () => {
        console.log(document.getElementsByName('idCard')[0].value)
        this.props.dispatch(postPinjam({
            idCard: document.getElementsByName('idCard')[0].value,
            idBook: this.props.match.params.bookid,
            tglKadarluarsa: document.getElementsByName('date')[0].value
        }))
        this.props.hideModalPinjam()
    }

    render() {
        const showHideClassName = this.props.modalPinjam ? "modal display-block" : "modal display-none"
        return(
            <div className={showHideClassName}>
                <section className="modal-pinjam">
                    <button className="close" onClick={this.props.hideModalPinjam}>x</button>
                    <h3 className="h3">Silahkan di Pinjam</h3>

                    <div className= "container">
                        <div className = "label">
                            <p>ID CARD</p>
                        </div>
                        <div className ="inputt">
                            <input type="text" placeholder="id card ..." name={'idCard'} required/>
                        </div>
                    </div>

                    <div className= "container">
                        <div className = "label">
                            <p>TITLE</p>
                        </div>
                        <div className ="inputt">
                            <input type="text" placeholder="title ..." name={'name'} 
                            value= {this.state.dataPinjam[0].nameBook} required/>
                        </div>
                    </div>

                    <div className= "container">
                        <div className = "label">
                            <p>DATE</p>
                        </div>
                        <div className ="inputt">
                            <input type="date"  placeholder="id card ..." name={'date'} required/>
                        </div>
                    </div>

                    <div className= "contentt">
                        <img className={'imageBookk'} src = {this.state.dataPinjam[0].image} alt = {this.state.dataPinjam[0].title} />
                    </div>

                    <button className="save" onClick={this.addPinjam}>Borrow</button>

                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.book
    }
}

export default connect(mapStateToProps) (ModalPinjam)