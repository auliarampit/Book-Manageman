import React, { Component } from 'react'
import '../style/pinjam.css'
import { connect } from 'react-redux'
import { patchPinjam, getPinjam } from '../Publics/Actions/book'



class ModalPengembalian extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listPinjam: []
            
        }
    }
    componentDidMount = async() => {
       await this.props.dispatch(getPinjam(
            this.props.match.params.bookid
        
        ))
        this.setState({
            listPinjam: this.props.book.listPinjam
        })
    }

    patchPinjam = () => {
        console.log(this.state)
        this.props.dispatch(patchPinjam(
        this.state.listPinjam[0].idPeminjam,this.props.match.params.bookid
        ))
        this.props.hideModalPengembalian()
    }

    render() {
        const ListPinjam = this.state.listPinjam ? this.state.listPinjam : undefined
        console.log(ListPinjam)
        const Book = ListPinjam[0] ? this.props.book.bookList.filter((item) => item.idBook == 
        ListPinjam[0].idBook) : undefined

        // console.log(ListPinjam[0].tglKadarLuarsa)

        const showHideClassName = this.props.modalPengembalian ? "modal display-block" : "modal display-none"
        return(
            <div className={showHideClassName}>
                <section className="modal-pinjam">
                    <button className="close" onClick={this.props.hideModalPengembalian}>x</button>
                    <h3 className="h3">Silahkan di Kembalikan</h3>

                    <div className= "container">
                        <div className = "label">
                            <p>ID CARD</p>
                        </div>
                        <div className ="inputt">
                            <input type="text" placeholder="id card ..." name={'idCard'}
                            value= {ListPinjam[0] ? ListPinjam[0].idCard : ''} required/>
                        </div>
                    </div>

                    <div className= "container">
                        <div className = "label">
                            <p>TITLE</p>
                        </div>
                        <div className ="inputt">
                            <input type="text" placeholder="title ..." name={'name'} 
                             value = {Book ? Book[0].nameBook : ''} required/>
                        </div>
                    </div>

                    <div className= "container">
                        <div className = "label">
                            <p>DATE</p>
                        </div>
                        <div className ="inputt">
                            <input type="text"  placeholder="tgl kadaluarsa" name={'date'} 
                            value = {ListPinjam[0] ? ListPinjam[0].tglKadarluarsa : ''}required/>
                        </div>
                    </div>

                    {/* <div className= "contentt">
                        <img className={'imageBookk'} />
                    </div> */}

                    <button className="save" onClick={this.patchPinjam}>Borrowed</button>

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

export default connect(mapStateToProps) (ModalPengembalian)