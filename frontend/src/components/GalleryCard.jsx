import React from 'react'

const GalleryCard = ({ pic }) => {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-2xl drop-shadow-[0_12px_8px_rgba(0,0,0,0.2)]">
      <img
        className="w-full h-full object-cover"
        src={pic}
        alt=""
      />
    </div>
  )
}

export default GalleryCard
