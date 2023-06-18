import React from 'react'
import './Personal.css'

const Personal = () => {
  return (
    <div className='Personal'>

        <span style={{marginLeft:"8rem"}}><b>PERSONAL : </b> <br /></span>

        <div className='row'>
        <div className='LeftSpan col-5'><b>DOB : </b></div>
        <div className='col-2'>03/08/2000 <br /></div>
        </div>
        <div className='row'>
        <div className='LeftSpan col-5'><b>HT : </b></div>
        <div className='col-2'>5'7 <br /></div>
        </div>
        <div className='row'>
        <div className='LeftSpan col-5'><b>WT : </b></div>
        <div className='col-2'>52 <br /></div>
        </div>
        <div className='row'>
        <div className='LeftSpan col-5'><b>GRADE YEAR : </b></div>
        <div className='col-2'>2013 <br /></div>
        </div>
        <div className='row'>
        <div className='LeftSpan col-5'><b>POSITION : </b></div>
        <div className='col-2'>SS/2nd/C <br /></div>
        </div>
    </div>
  )
}

export default Personal