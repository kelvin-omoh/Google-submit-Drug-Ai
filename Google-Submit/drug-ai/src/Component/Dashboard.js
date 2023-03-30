import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import Navigation from './Navigation'
const Dashboard = () => {
  return (
    <div className=' relative bg-[#bbbbbb]  h-screen w-[100vw]'> 
        <div className=' absolute top-0'>
          <Navigation/>
        </div>

        <div className='mt-[3em] flex flex-col items-center justify-center '>
 {/* DASHBOARD */}
 <div >
            <h1 className='text-[1.3em] font-bold p-4 '>Dashboard</h1>
        </div>
        <div  className=''>
            <input type="text" className='p-5 w-[25vw] rounded-l-md' placeholder='Enter a specific model for the sample ' />
        <select className='py-[1.36em] mr-3 rounded-r-md' name="" id="">
            <label htmlFor="">Enter your model</label>
            <option value="">A-</option>
            <option value="">b</option>
            <option value="">c</option>
            <option value="">d</option>
            <option value="">e</option>
            <option value="">f</option>
        </select>
        <button className=' bg-[#4750AB] py-5 px-8 rounded-md text-white'>Submit</button>
        </div>
        </div>

      
    </div>
  )
}

export default Dashboard
