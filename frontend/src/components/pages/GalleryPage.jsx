import React, {useState, useRef, useEffect} from 'react'
import Gallery from './Gallery.jsx'

const GalleryPage = () => {
  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         setVisible(entry.isIntersecting);
  //       },
  //       { threshold: 0.5 }
  //     );
  
  //     if (containerRef.current) {
  //       observer.observe(containerRef.current);
  //     }
  
  //     return () => observer.disconnect();
  //   }, []);
  //   const containerRef = useRef(null);
  //   const [visible, setVisible] = useState(false);
    const delay = 0.4;
  return (
    <div className="bg-[#f6f6f6] py-32">
        <div className="container mx-auto flex flex-col gap-12">
          <div className='text-center xl:text-left'>
            <div className="orange_heading fade-up" style={{ animationDelay: `${0 * delay}s` }}>Memories</div>
            <div className="black_heading fade-up" style={{ animationDelay: `${1 * delay}s` }}>Gallery</div>
          </div>
        <div className="fade-up" style={{ animationDelay: `${2 * delay}s` }}>
          <Gallery />
          </div>
        </div>
      </div>
  )
}

export default GalleryPage
