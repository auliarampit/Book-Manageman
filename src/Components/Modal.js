import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBook, postBook } from '../Publics/Actions/book';


class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: [],
    }
    
  }

  componentDidMount = async() => {
    await this.props.dispatch(getBook())
    this.setState ({
      book: this.props.book,
      image: ''
    })
  }

  add = async() => {
     console.log(this.state.image);
    const formData = new FormData()
      formData.append('name', document.getElementById('title').value)
      formData.append('image', this.state.image)
      formData.append('idCategory', document.getElementById('category').value)
      formData.append('writer', document.getElementById('writer').value)
      formData.append('location', document.getElementById('location').value)
      formData.append('description', document.getElementById('description').value)
      
     await this.props.dispatch(postBook(formData))
  }

  pilih(ee) {
    const selectedFile = ee.target.files[0]
    const reader = new FileReader()
    const image = document.getElementById('image')
    this.setState({
        image: selectedFile
    })
    reader.onload = (eee) => {
        image.src = eee.target.result
    }
    reader.readAsDataURL(selectedFile)
}

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button onClick={this.props.handleClose} className={'close'}>X</button>
        <p>Add Data</p>
        <div>
          <div style={{marginLeft: '50px', marginBottom:'20px'}}>
            <img id="image" src={'http://rsudblambangan.banyuwangikab.go.id/asset/foto_berita/no-image.jpg'} style={{
              width: '150px', minHeight: '100px', borderRadius: '10px', border: '1px solid black', marginLeft: '30%'
              }} />
            <input type="file" id={'image'} name='image' required onChange={(ee) => this.pilih(ee)} />
          </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Title</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Title ...' id={'title'} name='title' required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Category</p>
            </div>
            <div className='input'>
            <select id={'category'}>
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
              <input type='text' placeholder='Writer ...' id={'writer'} name='writer' required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Location</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Location ...' id={'location'} name='location' required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Description</p>
            </div>
            <div className='input'>
              <textarea placeholder='Description' rows='5' name='description' id={'description'} required/>
            </div>
          </div>
          <div>
            <button className='save' onClick={this.add} >Save</button>
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
export default connect(mapStateToProps) (Modal)
