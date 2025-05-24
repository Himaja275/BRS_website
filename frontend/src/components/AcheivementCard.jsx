import React from 'react'

const AcheivementCard = (props) => {
  // console.log("acheivement card triggered");
  // console.log(props.visible);
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* {console.log("acheivement card inside triggered")} */}
          <div className={`text-center flex flex-col justify-center items-center min-h-32 hidden-card ${props.visible?"animate-acheived-text":"hidden-card"}`}>
              <div className='font-sans font-bold text-2xl'>{props.text1}</div>
              <div className='text-[18px] font-medium w-40 leading-tight'>{props.text2}</div>
              <div className='font-sans font-medium text-light nml-text w-48'>{props.text3}</div>
          </div>
          <div className='z-10'>
              <img className='flex-1 lg:w-[190px] w-[215px] h-[270px] lg:h-[230px] object-cover object-center rounded-xl lg:rounded-lg' src={props.photo} alt="" />
          </div>
    </div>
  )
}

export default AcheivementCard
