'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const DonutCard = ({title, desc, imageUrl, email, authorId, _id, likes}) => {
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState(false)
  const [donutLikes, setDonutLikes] = useState(0)

  useEffect(() => {
    session && likes && setIsLiked(likes.includes(session?.user?._id))
    session && likes && setDonutLikes(likes.length)
  }, [likes, session])

  
  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/donut/${_id}/like`, {
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
  return (
    <section>
    <div className="">
        <Link
        href={`/profile/${_id}`}
        >
          Author Page: {email}
          </Link>
        <div
        className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
        key={authorId}>
          <Link
          href={`/donut/${_id}`}
          >
        <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-64"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80">

            <p>{title}</p>
            <h3>{desc}</h3>
            <h4>{email}</h4>
            </div>
            </Link>
            <div >
            {donutLikes} {" "} {isLiked
              ? (<AiFillLike onClick={handleLike} size={20} />)
              : (<AiOutlineLike onClick={handleLike} size={20} />)}
          </div>
        </div>
        </div>
    </section>
  )
}

export default DonutCard