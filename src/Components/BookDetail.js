import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/BookDetail.css'
import {deleteBook} from '../Publics/Actions/book'
import {postPinjam} from '../Publics/Actions/book'

function convert (date) {
  let data = Date.parse(date)
  let newDate = new Date(data)
  let day = newDate.getDate()
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let month = months[newDate.getMonth()]
  var year = newDate.getFullYear()
  return `${day} ${month} ${year}`
}

  function editData () {
    this.props.showModalEdit()
  }
  class BookDetail extends React.Component{

    constructor(props){
      super(props);
      // console.log(this.props.match.params.idBook)
      this.state={
         
          detailData : this.props.book.bookList.filter((item) => item.idBook == 
          this.props.match.params.bookid)
      }
    }

    deleteData = () => {
      this.props.dispatch(deleteBook(this.props.match.params.bookid, this.props.login.login.token,
        this.props.login.login.iduser))
      this.props.showModalDelete()
    }

    pinjam = async() => {
      // this.props.dispatch(postPinjam(this.props.match.params.bookid))
      await this.props.showModalPinjam()

    }

    render(){
      // console.log(this.state.detailData[0].image)
      console.log(this.props)
  return (
    
    <div className='book-detail'>
      <div>
        <ul>
          <li><Link to='/book' className='back'>&lArr;</Link></li>
          <li className='button' onClick={localStorage.token ? this.props.showModalEdit : ''}>Edit</li>
          <li className='button' onClick={localStorage.token ? this.deleteData : () =>  alert('Anda harus login terlebih dahulu')}>Delete</li>
        </ul>
        <img className={'imageHeader'} src={this.state.detailData[0].image ? this.state.detailData[0].image :
        'http://rsudblambangan.banyuwangikab.go.id/asset/foto_berita/no-image.jpg'} alt={this.state.detailData[0].image} />
      </div>
      <div className='content'>
        <img className={'imageBook'} src={this.state.detailData[0].image} alt={this.state.detailData[0].title} />

       {this.state.detailData[0].status === 1 ? <button className="pinjam" onClick= {this.props.showModalPengembalian}>Return</button> : <button className="pinjam" onClick={this.pinjam}>Borrow</button>} 

        <p className='title'>{this.state.detailData[0].nameBook}</p>
        <p className='date'>{convert(this.state.detailData[0].update_at)}</p>
        <p className='text'>{this.state.detailData[0].description}</p>
        {/* <p className='description'>{this.state.detailData.description}</p> */}
      </div>
    </div>
  )
}
  }

const mapStateToProps = (state) => {
  return {
    book:state.book,
    login: state.login
  }
}

export default connect(mapStateToProps)(BookDetail)
