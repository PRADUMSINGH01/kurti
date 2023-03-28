import React from 'react'

const FullLAy = ({img}) => {
  return (
    <div className='h-[16rem] w-[20rem] '>
        <img src={img} alt="" className='object-contain' />
    </div>
  )
}

export default FullLAy