import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({email:"",password:""})
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted",form.email,form.password);
        setForm({email:'',password:''});
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col items-center justify-center gap-4'  action="">
                <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required className='text-xl border-2 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400 ' type="email" placeholder='Enter your email'/>
                <input required  value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} className='text-xl py-3 px-5 border-2 outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 rounded-full ' type="password" placeholder='Enter password' />
                <button className='mt-5  text-xl rounded-full py-3 px-5 bg-emerald-600  border-2 outline-none' >Log in</button>
            </form>

        </div>
        
    </div>
  )
}

export default Login