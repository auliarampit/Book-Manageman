import React, { Component } from 'react'
import store from './Publics/Store';
import {Provider} from 'react-redux';
import { Route,BrowserRouter as Router } from 'react-router-dom'

import Nav from './Screens/Navbar'
import Seacrh from './Screens/Seacrh'
import Card from './Components/Card'
import Data from './Data'
import Modal from './Components/Modal'
import BookDetail from './Components/BookDetail'
import ModalDelete from './Components/ModalDelete'
import ModalEdit from './Components/ModalEdit';
import ModalPinjam from './Components/Pinjam'
import ModalPengembalian from './Components/Pengembalian'
import Login from './Components/Login'
import Register from './Components/Register'


import '../src/App.css'
import Profile from './Screens/Profile';


class App extends Component {
  constructor () {
    super()
    this.state = {Data, show : false, modalDelete: false, modalEdit: false, modalPinjam: false, 
      modalPengembalian: false, modalAlert: false, seacrh: ""}
  }
  showModal = () => {
    this.setState({ show : true})
  }
  hideModal = () => {
    this.setState({ show : false})
  }

  showModalEdit = () => {
    this.setState({ modalEdit: true })
  }

  hideModalEdit = () => {
    this.setState({ modalEdit: false })
  }

  showModalPinjam = () => {
    this.setState({ modalPinjam: true })
  }

  hideModalPinjam = () => {
    this.setState({ modalPinjam: false })
  }

  showModalPengembalian = () => {
    this.setState({ modalPengembalian: true })
  }

  hideModalPengembalian = () => {
    this.setState({ modalPengembalian: false })
  }

  showModalDelete = () => {
    this.setState({ modalDelete: true })
  }

  hideModalDelete = () => {
    this.setState({ modalDelete: false })
  }

  showModalAlert = () => {
    this.setState({ modalAlert: true })
  }

  hideModalAlert = () => {
    this.setState({ modalAlert: false })
  }
  
  setSeacrh = (seacrh) => {
    this.setState({seacrh:seacrh})
  }
  render() {
    console.log(this.state)
    return (
      <Provider store={store}>
      <div id="app">
        <Router>
          
          <Route component={Nav} />

          <Route path= {'/login'} render={() => <Login  />} />

          <Route path = {'/register'} render = {() => <Register/>} />

          <Route path = {'/profile'} render = {() => <Profile/>} />

          <Route exact path={"/book"} render={ () =><Seacrh setSeacrh={this.setSeacrh}/>} />

          <Route exact path={'/book'} render={() => <Card data={this.state} seacrh={this.state.seacrh} showModal={this.showModal}/>} />

          <Route exact path={"/book"} render={() => <Modal show={this.state.show} dataState={this.state} handleClose={this.hideModal} dataAdd={this.addData} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <BookDetail  showModal={this.showModal} showModalDelete={this.showModalDelete} showModalEdit={this.showModalEdit} showModalPinjam={this.showModalPinjam} showModalPengembalian={this.showModalPengembalian} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <ModalDelete data={this.state} deleteData={this.deleteData} modalDelete={this.state.modalDelete} hideModalDelete={this.hideModalDelete} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <ModalEdit editData={this.editData} modalEdit={this.state.modalEdit} hideModalEdit={this.hideModalEdit} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <ModalPinjam   pinjamData={this.pinjamData} modalPinjam={this.state.modalPinjam} hideModalPinjam={this.hideModalPinjam} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <ModalPengembalian modalPengembalian={this.state.modalPengembalian} hideModalPengembalian={this.hideModalPengembalian} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props)=><Modal  getUpdateText={this.getUpdateText} updateText={this.updateText} show={this.state.show}  handleClose={this.hideModal} dataUpdate={this.updateData} {...props}/>}/>
        </Router>
      </div>
      </Provider>
    )
  }
}

export default App
