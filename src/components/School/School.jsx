import React from 'react'
import './School.css'

const School = () => {
  return (
    <div className='School'>
      <div className='row'>
        <div className='col-4 LeftSpan'><b><u>School </u>: </b></div>
        <div className='col-6'>Forney High School(4A) Forney, Texas </div>
      </div>
      <div className='row'>
        <div className='col-4 LeftSpan'><b><u>Coach </u>: </b></div>
        <div className='col-6'>Eric Montgomery </div>
      </div>
      <div className='row'>
        <div className='col-4 LeftSpan'><b><u>Email</u> : </b></div>
        <div className='col-6'>eric.montgomery@gmail.com <br /><br /></div>
      </div>
      <div className='row'>
        <div className='col-12 LeftSpan'><b><u>Academic Achievements </u>: </b></div>
        <div className='col-12 LeftSpan'>AB House Roll </div>
        <div className='col-12 LeftSpan'>NUHS <br /><br /></div>
      </div>
      <div className='row'>
        <div className='col-12 LeftSpan'><b><u>Extra-curricular Activities </u>: </b></div>
        <div className='col-12 LeftSpan'>Softball, Sports, Camping.</div>
      </div>

    </div>
  )
}

export default School