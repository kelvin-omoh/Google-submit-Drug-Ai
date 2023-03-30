import React from 'react'
import { Link } from 'react-router-dom'
import logo from  '../Assets/logo.png' 

const Login = () => {
  return (
    
    <div>
       <div className=" w-screen h-screen flex gap-[3em] flex-col justify-center items-center">
            <div className="title mb-[3em] flex flex-col gap-4 justify-center items-center">
                <img src={logo} className="  " width={70} alt="" />
                <h1 className='text-[2em] text-[#0C1AA5] font-[700]'>  AI Generative</h1>
              
            </div>
            <form action="" className='flex gap-9 flex-col'>
                <input type="email" className=' p-4  rounded-md border-[1px] border-[#bfbfbf]' placeholder='✉️  Enter email here ' />
                <input type="email" className=' p-4  rounded-md border-[1px] border-[#bfbfbf] ' placeholder='🔒  Enter password here' />
                    <Link to="/dashboard">
                        <button className=' w-full bg-[#2E39A4] rounded-md text-white px-8 py-3'>
                                Login
                        </button>
                     </Link>
                   
                 <div>
                    <Link>Forgot Password ?</Link> | <Link>Forgot Username ?</Link>
                 </div>
            </form>
       </div>
    </div>
  )
}

export default Login
