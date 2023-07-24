'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FormInput from '@/component/FormInput'
import {  AiOutlineUser, AiOutlineSecurityScan, AiOutlineMessage } from 'react-icons/ai'
import Link from 'next/link'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    const handleSubmit = async(e) => {
        e.preventDefault()
    
        if(username === '' || email === '' || password === ''){
            toast.error("Fill all fields")
            return
        }
    
        if(password.length < 6){
            toast.error("Password must be at least 6 characters")
            return
        }    
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({username, email, password})
            })
    
            console.log(await res.json())
            if(res.ok){
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            } else {
                toast.error("Error occured while registering")
                return
            }
        } catch (error) {
            console.log(error)
        }
      }


  return (
    <section className='px-3 py-10 w-full'>
        <div className="shadows">
      <h2 className="shadows-text">Register to Donut Shop</h2>
        <div className='mt-8'>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb- gap-4">
        <div class="flex relative ">
        <span class="form-styling">
            <AiOutlineMessage />
        </span>
        <FormInput
        className="form-inputs"
        type="text" placeholder='Username...' 
        onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div class="flex relative ">
        <span class="form-styling">
        
        <AiOutlineUser/>
               </span>
                    <FormInput 
                    className="form-inputs"
                    type="text" placeholder='Email...' 
                    onChange={(e) => setEmail(e.target.value)} />
                   
                   </div>
                   <div class="flex relative ">
                   <span class="form-styling">
                   
                   <AiOutlineSecurityScan />
               </span>
                   <FormInput
                    className="form-inputs"
                    type="password" placeholder='Password...' 
                    onChange={(e) => setPassword(e.target.value)}  />
                    
                    </div>
                    <div className='flex w-full flex-col'>
                    <button
                    className='btn btn-secondary'
                    >Register</button>
                    <Link
                    href={'/login'}
                    onClick={() => signIn()}>
                        Already Have An Account?<br /> Login Now.
                    </Link>
                    </div>
                  </div>
                </form>
        </div>
        <ToastContainer />
    </div>
    </section>
  )
}

export default Register