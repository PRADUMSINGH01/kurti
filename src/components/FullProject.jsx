import React from 'react'

const FullProject = ({img,title}) => {
  return (
    <div className='w-[22rem] h-[20rem] flex flex-col justify-between items-center box-border'>
        <div className="h-[14rem] object-contain">

        <img src={img} alt="" height={200} width={300}/>
        </div>
        <h1>{title}</h1>
        <p>Off <span className='text-indigo-700'>70%</span></p>


    </div>
  )
}

export default FullProject