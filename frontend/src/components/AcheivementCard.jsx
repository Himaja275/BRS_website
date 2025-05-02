import React from 'react'

const AcheivementCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
          <div className='text-center flex flex-col justify-center items-center'>
              <div className='font-sans font-bold text-2xl'>{props.text1}</div>
              <div className='text-[18px] font-medium w-40 leading-tight'>{props.text2}</div>
              <div className='font-sans font-medium text-light nml-text w-48'>{props.text3}</div>
          </div>
          <div>
              <img className='w-60 h-72 object-cover object-center scale-[0.85] rounded-2xl' src={props.photo} alt="" />
          </div>
    </div>
  )
}

export default AcheivementCard
