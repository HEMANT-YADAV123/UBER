import React from 'react'
import { useState } from 'react'
import loginlogo from '../assets/CityCruise__3_-removebg-preview.png'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
    const [email,setEmail] = useState('');  
    const [password,setPassword] = useState(''); 
    const [captainData,setCaptainData] = useState({}); 
    const submitHandler = (e)=>{
        e.preventDefault();
        setCaptainData({
            email:email,
            password:password
        })
        setEmail('')
        setPassword('')    
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-32 h-10 mb-8 -ml-2'src={loginlogo} alt="img" />
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                <input 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='email@example.com'
                />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                type="password" 
                placeholder='password'
                />
                <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
            </form>

            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'> Register as a captain </Link></p>
        </div>

        <div>
            <Link 
            to='/login'
            className='bg-[#d5622d] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default Captainlogin
