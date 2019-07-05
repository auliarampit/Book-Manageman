import React, { Component } from 'react'

import Nav from './Screens/Navbar'
import Seacrh from './Screens/Seacrh'
import Card from './Components/Card'
import Data from './Data'
import Modal from './Components/Modal'
import { Route, Redirect,BrowserRouter as Router } from 'react-router-dom'
import BookDetail from './Components/BookDetail'
import '../src/App.css'
import ModalDelete from './Components/ModalDelete'

class App extends Component {
  constructor () {
    super()
    this.state = {Data, show : false, modalDelete: false}
  }
  showModal = () => {
    this.setState({ show : true})
  }
  hideModal = () => {
    this.setState({ show : false})
  }
  showModalDelete = () => {
    this.setState({ modalDelete: true })
  }

  hideModalDelete = () => {
    this.setState({ modalDelete: false })
  }
  addData = (dataAdd) => {
    this.state.Data.push(dataAdd)
    console.log(this.state.Data)
  }
  deleteData = (dataDelete) => {
    this.state.Data.splice(dataDelete,1)
  }
  updateText = (param) =>{
    this.setState(this.state.update[param] = param)
  }
  getUpdateText = (param) =>{
    return this.state.update[param];
  }
  updateData = (index, updateData) => {
    this.state.Data[index] = updateData
  }
  render() {
    return (
      <div id="app">
        <Router>
          <Redirect exact from="/"  to="/book" />
          <Route exact path={"/book"} component={Nav} />
          <Route exact path={"/book"} component={Seacrh} />
          <Route exact path={"/book"} render={(props) => <Card data={this.state} showModal={this.showModal} {...props}/>} />

          <Route exact path={"/book/:bookid"} render={(props) => <BookDetail data={this.state} showModal={this.showModal} showModalDelete={this.showModalDelete} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <ModalDelete data={this.state} deleteData={this.deleteData} modalDelete={this.state.modalDelete} hideModalDelete={this.hideModalDelete} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props)=><Modal dataState={this.state} getUpdateText={this.getUpdateText} updateText={this.updateText} show={this.state.show}  handleClose={this.hideModal} dataUpdate={this.updateData} {...props}/>}/>
        </Router>
      </div>
    )
  }
}

export default App
