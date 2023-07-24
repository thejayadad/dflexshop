'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { AiOutlineFileImage } from 'react-icons/ai'


const EditDonut = (ctx) => {
  const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      async function fetchDonut() {
          const res = await fetch(`http://localhost:3000/api/donut/${ctx.params.id}`)

          const donut = await res.json()

          setTitle(donut.title)
          setDesc(donut.desc)
          setImageUrl(donut.imageUrl)
      }
      fetchDonut()
  }, [])

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

        if(title === '' || imageUrl === '' || desc === ''){
            toast.error("All fields are required")
            return
        }

        try {
            

            const body = {
                title, 
                desc, imageUrl
            }

        
            
            const res = await fetch(`http://localhost:3000/api/donut/${ctx.params.id}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${session?.user?.accessToken}`
                },
                method: "PUT",
                body: JSON.stringify(body)
            })

            if(!res.ok){
                throw new Error("Error has occured")
            }

            const donut = await res.json()

            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section>
        <h2>Update Donut</h2>
        <div>
        <form onSubmit={handleSubmit}>
                    <input value={title} type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={desc} placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
      
                 
                    <input placeholder='Image' type="text"  onChange={(e) => setImageUrl(e.target.value)} />
                    <button >Update</button>
                </form>
        </div>
        <ToastContainer />
    </section>
  )
}

export default EditDonut