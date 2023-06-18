import React from 'react'
import './Score.css'

const Score = () => {
  return (
    <div className='Score'>
      <div className='row'>
        <div className='LeftSpan col-5'><b>GPA : </b></div>
        <div className='col-2'>3.0 <br /></div>
        </div>
        <div className='row'>
        <div className='LeftSpan col-5'><b>SAT/ACT : </b></div>
        <div className='col-2'>N/A<br /></div>
        </div>
    </div>
  )
}

export default Score