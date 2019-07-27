import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateBook } from '../Publics/Actions/book';


class ModalEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editData: this.props.book.bookList.filter((item) => item.idBook == 
      this.props.match.params.bookid)
    }
    
  }

  update = () => {
  
    this.props.dispatch(updateBook({
      name: document.getElementById('title').value,
      image: document.getElementById('image').value,
      idCategory: document.getElementById('category').value,
      writer: document.getElementById('writer').value,
      location: document.getElementById('location').value,
      description: document.getElementById('description').value
    },this.props.match.params.bookid))
  }
  changeHendle = (data) => {
    const name = data.currentTarget.name
    const val = data.currentTarget.value
    this.state.editData[0][name] = val
      this .setState({
        editData:this.state.editData
      })
      console.log(this.state)
  }

  render() {

    const showHideClassName = this.props.modalEdit ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button onClick={this.props.hideModalEdit} className={'close'}>X</button>
        <p>Edit Data</p>
        <div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Url Image</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Url Image ...' id={'image'} name='image'
                value = {this.state.editData[0].image} onChange= {this.changeHendle} required
              />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Title</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Title ...' id={'title'} name='nameBook'
              value={this.state.editData[0].nameBook} onChange={this.changeHendle}  required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Category</p>
            </div>
            <div className='input'>
            <select id={'category'} value={parseInt(this.state.editData[0].idCategory)} onChange={this.changeHendle} name='idCategory' required>
                <option value=''>=PILIH=</option>
                <option value="1">Anak-Anak</option>
                <option value="2">Dewasa</option>
              </select>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Writer</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Writer ...' id={'writer'} name='writerBook'
              value={this.state.editData[0].writerBook} onChange= {this.changeHendle} required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Location</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Location ...' id={'location'} name='location'
              value={this.state.editData[0].location} onChange={this.changeHendle} required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Description</p>
            </div>
            <div className='input'>
              <textarea placeholder='Description' rows='5' name='description' id={'description'}
              value={this.state.editData[0].description} onChange={this.changeHendle} required/>
            </div>
          </div>
          <div>
            <button className='save' onClick={this.update} >Save</button>
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
export default connect(mapStateToProps) (ModalEdit)
