'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'



const CreateDonut = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p>
            Access Denied
        </p>
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!imageUrl || !title || !desc){
            toast.error("All fields are required")
            return
        }

        try {
          
          const res = await fetch(`http://localhost:3000/api/donut`, {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${session?.user?.accessToken}` 
            },
            method: 'POST',
            body: JSON.stringify({title,desc,imageUrl,authorId: session?.user?._id, email: session?.user?.email})
          })

          if(!res.ok){
            throw new Error("Error occured")
          }

          const blog = await res.json()

          router.push('/')
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <section>
        <h2>Create Donut</h2>
        <div>
        <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
                    <input type="text"  onChange={(e) => setImageUrl(e.target.value)} />
                  <button type='submit'>Create</button>
                </form>
        <ToastContainer />
        </div>
    </section>
  )
}

export default CreateDonut