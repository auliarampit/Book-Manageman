import React from 'react'
import '../style/Seacrh.css'

function Seacrh (props) {
  function seacrh() {
    props.setSeacrh(document.getElementById('seacrh').value)
  }
  return (
    <div>
      <input type='text' id='seacrh' onKeyUp={seacrh} placeholder='Seacrh Book...' />
    </div>
  )
}

export default Seacrh
