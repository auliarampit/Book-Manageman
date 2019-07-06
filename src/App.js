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
    this.state = {Data, show : false, modalDelete: false, seacrh: ""}
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
  setSeacrh = (seacrh) => {
    this.setState({seacrh:seacrh})
  }
  render() {
    return (
      <div id="app">
        <Router>
          <Redirect exact from="/"  to="/book" />
          <Route exact path={"/book"} component={Nav} />
          <Route exact path={"/book"} render={ () =><Seacrh setSeacrh={this.setSeacrh}/>} />

          <Route exact path={"/book"} render={() => <Card data={this.state} seacrh={this.state.seacrh} showModal={this.showModal}/>} />

          <Route exact path={"/book"} render={() => <Modal show={this.state.show} dataState={this.state} handleClose={this.hideModal} dataAdd={this.addData} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <BookDetail data={this.state} showModal={this.showModal} showModalDelete={this.showModalDelete} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props) => <ModalDelete data={this.state} deleteData={this.deleteData} modalDelete={this.state.modalDelete} hideModalDelete={this.hideModalDelete} {...props} />} />

          <Route exact path={"/book/:bookid"} render={(props)=><Modal dataState={this.state} getUpdateText={this.getUpdateText} updateText={this.updateText} show={this.state.show}  handleClose={this.hideModal} dataUpdate={this.updateData} {...props}/>}/>
        </Router>
      </div>
    )
  }
}

export default App
