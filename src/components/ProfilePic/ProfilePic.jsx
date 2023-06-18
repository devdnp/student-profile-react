import React from 'react'
import './ProfilePic.css'
import DP from './dp.jpg'

const ProfilePic = () => {
  return (
    <div className='ProfilePic'>
        <img src={DP} alt="" style={{height:"18rem",marginLeft:"3.5rem"}} className='img-fluid' />
    </div>
  )
}

export default ProfilePic