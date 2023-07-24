"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { format } from 'timeago.js'
import { useRouter } from 'next/navigation'



const DonutDetail = (ctx) => {
  const [donutDetails, setDonutDetails] = useState("")
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    async function fetchDonut() {
        const res = await fetch(`http://localhost:3000/api/donut/${ctx.params.id}`, { cache: 'no-store' })
        const donut = await res.json()

        setDonutDetails(donut)
        // setIsLiked(donut?.likes?.includes(session?.user?._id))
        // setDonutLikes(donut?.likes?.length || 0)
    }
    session && fetchDonut()
}, [session])
const handleDelete = async () => {
  try {
      const confirmModal = confirm("Are you sure you want to delete your donut?")

      if (confirmModal) {
          const res = await fetch(`http://localhost:3000/api/donut/${ctx.params.id}`, {
              headers: {
                  'Authorization': `Bearer ${session?.user?.accessToken}`
              },
              method: "DELETE"
          })

          if (res.ok) {
              router.push('/')
          }
      }
  } catch (error) {
      console.log(error)
  }
}

  return (
    <section>
        <h2>Donut Detail</h2>
        <div>
        {
                        donutDetails?.authorId?._id.toString() === session?.user?._id.toString()
                            ? (
                                <div>
                                    <Link href={`/donut/edit/${ctx.params.id}`}>
                                        Edit <BsFillPencilFill />
                                    </Link>
                                    <button onClick={handleDelete} >
                                        Delete
                                        <AiFillDelete />
                                    </button>
                                </div>
                            )
                            : (
                                <div >
                                    Author: <span>{donutDetails?.authorId?.username}</span>
                                </div>
                            )
                    }
        <div key={donutDetails?.id}>
          <p>{donutDetails?.title}</p> 
          <p>{donutDetails?.desc}</p>  
 
        </div>
        </div>
        <ToastContainer />
    </section>
  )
}

export default DonutDetail