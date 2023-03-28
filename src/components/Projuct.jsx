import React from 'react'
import FourLay from './FourLay'
import FullLAy from './FullLAy'
import img from '../asset/6.jpg'
import img1 from '../asset/9.jpg'
import img2 from '../asset/8.jpg'
import img3 from '../asset/7.jpg'

const Projuct = () => {
  return (
    <div className='w-full h-[68rem] md:ml-0  md:h-[40rem] flex justify-between flex-wrap items-center border-box ml-5'>

    <FourLay   img1={img3}  img2={img3} img3 ={img3} img4 = {img3} />
    <FullLAy img={img2}/>

    <FullLAy img={img}/>
    <FullLAy img={img1}/>


    </div>
  )
}

export default Projuct