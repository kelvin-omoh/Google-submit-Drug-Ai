import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import Logo from  '../Assets/logo.png' 
const Navigation = () => {
  return (
    <div className=' flex flex-col gap-5 w-[30vh] bg-[white] p-4 h-[100vh]'>
          {/* NAVIGATION */}
            <div className="logo  text-[#4750AB]">
                <div className=' w-fit flex justify-center items-center gap-4 m-4'>
                <img src={Logo} width={30} alt="" />
                 <h1>AI Generative</h1>
                </div>

                <div>

                </div>
             
            </div>         
            
    
        <div className=' flex gap-4 justify-center items-center  flex-col '> 
        <div className=' w-full bg-[#4750AB] flex justify-center items-center cursor-pointer gap-4 text-white p-4 rounded-md '><AiOutlineHome size={30}/> Dashboard </div>
        <div className='w-full  active:bg-[#4750AB] text-[#898989] flex justify-center cursor-pointer items-center gap-3 p-4 rounded-md active:text-white'><FiLogOut className='mr-6' size={30}/> Signout </div>
       
        </div>
        
            
     

    </div>
  )
}

export default Navigation
