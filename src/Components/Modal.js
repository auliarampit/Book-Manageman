import React, { useState } from 'react'


const Modal = (props) => {
    const [ setText] = useState(props.dataAdd ? "" : props.dataState.Data.find(item => item.bookid === props.match.params.bookid))
    const [data, setData] = useState({})
    console.log(props)
    const showHideClassName = props.show ? "modal display-block" : "modal display-none"
    let action = props.dataAdd ? add : update
    let dataFind = []
    let dataIndex = ""
    if (action === update) {
        dataFind = props.dataState.Data.find(item => item.bookid === props.match.params.bookid)
        dataIndex = props.dataState.Data.indexOf(dataFind)
    }
    function getData(evt) {
        let nme = evt.target.name
        data[nme] = evt.target.value
        setText({ nme: evt.target.value })
    }
    function add() {
        autoID()
        setData(data.created_at=new Date(),data.updated_at=new Date())
        props.dataAdd(data)
        props.handleClose()
        setText({})
    }
    function update() {
        let bookid = props.match.params.bookid
        setData(data.bookid = bookid)
        setData(data.created_at=dataFind.created_at,data.updated_at= new Date())
        console.log(data.bookid)        
        props.dataUpdate(dataIndex, data)
        props.handleClose()
        setText({})
    }
    function autoID() {
        console.log(props.dataState.Data[props.dataState.Data.length - 1].bookid)
        setData(data.bookid = (Number(props.dataState.Data[props.dataState.Data.length - 1].bookid) + 1).toString())
        console.log(data.id)
    }

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button onClick={props.handleClose} className={'close'}>X</button>
        <p>Add Data</p>
        <div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Url Image</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Url Image ...' name='image_url' onChange={getData} />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Title</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Title ...' name='title' onChange={getData} />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Description</p>
            </div>
            <div className='input'>
              <textarea placeholder='Description' rows='5' name='description' onChange={getData} />
            </div>
          </div>
          <div>
            <button className='save' onClick={action}>Save</button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Modal
