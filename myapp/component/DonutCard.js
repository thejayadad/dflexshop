import Link from 'next/link'
import React from 'react'

const DonutCard = ({title, desc, imageUrl, email, authorId, _id}) => {
  return (
    <section>
        <div>
        <Link
        href={`/profile/${_id}`}
        >
        <div key={_id}>
          <Link
          href={`/donut/${_id}`}
          >
            <p>{title}</p>
            <h3>{desc}</h3>
            <h4>{email}</h4>
            </Link>
        </div>
        </Link>
        </div>
    </section>
  )
}

export default DonutCard