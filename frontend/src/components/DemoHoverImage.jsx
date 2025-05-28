import React from 'react'
import img1 from '../assets/demo/img1.webp'
import img2 from '../assets/demo/img2.webp'
import img3 from '../assets/demo/img3.webp'
import img4 from '../assets/demo/img4.webp'
import img5 from '../assets/demo/img5.avif'
import img6 from '../assets/demo/img6.webp'
import DemoHoverImageSlide from './DemoHoverImageSlide'

const DemoHoverImage = () => {
  return (
    <div className='flex -space-x-2'>
          <DemoHoverImageSlide image={ img1} />
          <DemoHoverImageSlide image={ img2} />
          <DemoHoverImageSlide image={ img3} />
          <DemoHoverImageSlide image={ img4} />
          <DemoHoverImageSlide image={ img5} />
          <DemoHoverImageSlide image={ img6} />
    </div>
  )
}

export default DemoHoverImage
