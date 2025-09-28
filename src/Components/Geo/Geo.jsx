import React from 'react'
import './Geo.css'
import map from '../../assets/map.png'

const Geo = () => {
  return (
    <div className='geo-container'>
      <h2>Available Locations</h2>
      <p>Get to know our branches near you</p>
      <img src={map} alt="" />
    </div>
  )
}

export default Geo
