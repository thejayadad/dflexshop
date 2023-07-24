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
import Comment from '@/component/Comment'


const DonutDetail = (ctx) => {
  const [donutDetails, setDonutDetails] = useState("")
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState(false)
  const [donutLikes, setDonutLikes] = useState(0)
   const router = useRouter()
   const [commentText, setCommentText] = useState("")
   const [comments, setComments] = useState([])

  useEffect(() => {
    async function fetchDonut() {
        const res = await fetch(`http://localhost:3000/api/donut/${ctx.params.id}`, { cache: 'no-store' })
        const donut = await res.json()

        setDonutDetails(donut)
        setIsLiked(donut?.likes?.includes(session?.user?._id))
        setDonutLikes(donut?.likes?.length || 0)
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
const handleComment = async () => {
    if(commentText?.length < 2){
        toast.error("Comment must be at least 2 characters long")
        return
    }

    try {
        const body = {
            donutId: ctx.params.id,
            authorId: session?.user?._id,
            text: commentText
        }

        const res = await fetch(`http://localhost:3000/api/comment`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.user?.accessToken}`
            },
            method: "POST",
            body: JSON.stringify(body)
        })

        const newComment = await res.json()

        setComments((prev) => {
            return [newComment, ...prev]
        })
        
        setCommentText("")
    } catch (error) {
        console.log(error)
    }
}

const handleLike = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/donut/${ctx.params.id}/like`, {
            headers: {
                'Authorization': `Bearer ${session?.user?.accessToken}`
            },
            method: 'PUT'
        })

        console.log(res)
        if (res.ok) {
            if (isLiked) {
                setIsLiked(prev => !prev)
                setDonutLikes(prev => prev - 1)
            } else {
                setIsLiked(prev => !prev)
                setDonutLikes(prev => prev + 1)
            }
        }
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    async function fetchComments(){
      const res = await fetch(`http://localhost:3000/api/comment/${ctx.params.id}`, {cache: 'no-store'})
      const comments = await res.json()

      setComments(comments)
    }
    fetchComments()
  }, [])

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
        <div>
        {donutLikes} {" "} {isLiked ? <AiFillLike size={20} onClick={handleLike} /> : <AiOutlineLike size={20} onClick={handleLike} />}

        </div>
        </div>
        <div>
        <div >
            <h2>Comment Section</h2>
        <input value={commentText} type="text" placeholder='Type message...' onChange={(e) => setCommentText(e.target.value)}/>
        <button onClick={handleComment}>Post</button>
        </div>
        <div>
        {
            comments?.length > 0
            ? comments.map((comment) => (
                <Comment key={comment._id} comment={comment} setComments={setComments}/>
            ))
            : <h4>No comments. Be the first one to leave a comment!</h4>
        }
    </div>
        </div>
        <ToastContainer />
    </section>
  )
}

export default DonutDetail