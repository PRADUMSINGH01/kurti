import React from 'react'
import FullProject from './FullProject'
import img from '../asset/9.jpg'
import { FiChevronLeft, FiChevronRight,  } from "react-icons/fi";

const ProjectSlide = () => {
  return (
    <div className='hidden md:flex w-full  lg:flex justify-around items-center postision mt-0 border border-orange-500 shadow-2xl'>

<div className="absolute h-[20rem] left-0 w-3 md:w-10 bg-slate-900 text-slate-200 text-5xl text-center"><FiChevronLeft className='text-center mt-32'/></div>
 <div className="flex w-[100rem] h-[20rem]  justify-around overflow-x-auto">



   {[...Array(4)].map((x, i) =>
   <FullProject img={img} title={"full your all nessesity with pharma "} key={i}/>
  )}
 </div>
<div className="absolute right-0 h-[20rem] w-3 md:w-10 bg-slate-900 text-slate-200 text-5xl text-center"><FiChevronRight className='text-center mt-32'/></div>




    </div>
  )
}

export default ProjectSlide