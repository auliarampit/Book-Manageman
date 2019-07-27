import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import '../style/pinjam.css'

    class ModalDelete extends Component {

        constructor(props) {
            super(props)
            this.state = {
                delete: this.props.hideModalDelete()
            }
        }

        render(){
            const showHideClassName = this.props.modalDelete ? "modal display-block" : "modal display-none"

    return (
        <div className={showHideClassName}>
            <section className="modal-pinjam">
                <div>
                    <div className="inputGroup">
                        <p className="confirmation"> {`"${this.nameBook}"`} Has been deleted</p>
                        <img src={'https://3.bp.blogspot.com/-AG4Mi-Cyk1g/XJOwJXyb3_I/AAAAAAAAALY/6K-fNN5poyAp4Bmg-a49ZOT6M0Zry7BigCLcBGAs/s1600/IMG-20190321-WA0016.jpg'} alt={"Gambar"} style={{ width: '200px', marginLeft: '50%', transform: 'translate(50%)' }}></img>
                    </div>
                    <div>
                        <Link to={'/book'}><button className="delete" onClick={this.state.delete} style={{ marginRight: "10px" }}>Ok</button></Link>
                    </div>
                </div>
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

export default connect(mapStateToProps)(ModalDelete)