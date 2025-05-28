import React from 'react'
import GalleryCard from '../GalleryCard.jsx'
import img1 from '../../assets/gallery/img1.avif'
import img2 from '../../assets/gallery/img2.avif'
import img3 from '../../assets/gallery/img3.avif'
import img4 from '../../assets/gallery/img4.avif'
import img5 from '../../assets/gallery/img5.avif'
import img6 from '../../assets/gallery/img6.avif'
import img7 from '../../assets/gallery/img7.avif'
import img8 from '../../assets/gallery/img8.avif'
import img9 from '../../assets/gallery/img9.avif'
import img10 from '../../assets/gallery/img10.avif'
import img11 from '../../assets/gallery/img11.avif'
import img12 from '../../assets/gallery/img12.avif'
import img13 from '../../assets/gallery/img13.avif'
import img14 from '../../assets/gallery/img14.avif'

const Gallery = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
  ]
  return (
    <div className="bg-white rounded-2xl grid grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 items-center mx-auto container p-8">
  {images.map((image, index) => (
    <div key={index} className="flex justify-center items-center">
      <GalleryCard pic={image} />
    </div>
  ))}
</div>
  )
}

export default Gallery
