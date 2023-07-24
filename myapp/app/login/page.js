'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from 'next-auth/react'
import FormInput from '@/component/FormInput'
import { AiOutlineSecurityScan, AiOutlineMessage } from 'react-icons/ai'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section className='px-3 py-10 w-full'>
    <div className="shadows">
  <h2 className="shadows-text">Login to Donut Shop</h2>
    <div className='mt-8'>
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col mb- gap-4">
    <div class="flex relative ">
    <span class="form-styling">
        <AiOutlineMessage />
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
                >Login</button>
                <Link
                href={'/register'}
                >
                    Need An Account?<br /> Register Now
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

export default Login