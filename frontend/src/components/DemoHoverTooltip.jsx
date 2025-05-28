import React from 'react'
import DemoHoverImage from './DemoHoverImage'

const DemoHoverTooltip = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-[#1a1c1d] w-max p-3 rounded-3xl">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-[#9ba1a5] text-sm font-medium">1k+ already joined</div>
          <div><DemoHoverImage/></div>
        </div>
      </div>
      
      {/* Tip */}
      <div className="w-3 h-3 bg-[#1a1c1d] rotate-45 absolute -bottom-1"></div>
    </div>
  )
}

export default DemoHoverTooltip
