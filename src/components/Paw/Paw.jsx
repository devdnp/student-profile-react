import React from 'react'
import './Paw.css'

const Paw = () => {
  return (
    <div className='Paw'>
      <div className='row'>
        <div className='LeftSpan col-5'><b>Bats : </b></div>
        <div className='col-2'>Right <br /></div>
      </div>
      <div className='row'>
        <div className='LeftSpan col-5'><b>Throws : </b></div>
        <div className='col-2'>Right <br /></div>
      </div>
    </div>
  )
}

export default Paw