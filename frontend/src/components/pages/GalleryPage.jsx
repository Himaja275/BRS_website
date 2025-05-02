import React from 'react'
import Gallery from './Gallery.jsx'

const GalleryPage = () => {
  return (
    <div className="bg-[#f6f6f6] py-32">
        <div className="container mx-auto flex flex-col gap-12">
          <div>
            <div className="orange_heading">Memories</div>
            <div className="black_heading">Gallery</div>
          </div>
          <Gallery />
        </div>
      </div>
  )
}

export default GalleryPage
