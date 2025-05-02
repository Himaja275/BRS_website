import React from 'react'

const GalleryCard = (props) => {
  return (
    <div>
      <img className='w-72 h-72 object-cover object-center scale-[0.85] rounded-2xl drop-shadow-[0_12px_8px_rgba(0,0,0,0.2)]' src={props.pic} alt="" />
    </div>
  )
}

export default GalleryCard
