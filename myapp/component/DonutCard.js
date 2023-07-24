import Link from 'next/link'
import React from 'react'

const DonutCard = ({title, desc, imageUrl, email, authorId, _id}) => {
  return (
    <section>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link
        href={`/profile/${_id}`}
        >
        <div
        className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
        key={_id}>
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
        </div>
        </Link>
        </div>
    </section>
  )
}

export default DonutCard