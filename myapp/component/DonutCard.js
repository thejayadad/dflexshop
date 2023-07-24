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
            <p>{title}</p>
            <h3>{desc}</h3>
            <h4>{email}</h4>
            <h4>{authorId}</h4>

        </div>
        </Link>
        </div>
    </section>
  )
}

export default DonutCard