"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'



const DonutList = () => {
    const { data: session } = useSession();
    const [allDonuts, setAllDonuts] = useState([]);
 


    useEffect(() => {
      const fetchDonuts = async () => {
        const response = await fetch(`/api/donut/`);
        const data = await response.json();
  
          setAllDonuts(data);
      };
  
      fetchDonuts();
    }, [session]);
  


  return (
    <section className="home-grid">
        <div>
            {allDonuts.map((singleDonut) => (
                <>
                <div className="">
              <div
              className=""

              >
              <img
                      src={singleDonut.imageUrl}
                      alt={singleDonut.title}
                      className="object-cover w-full h-64"
                    />
           
                <Link
                href={`/profile/${singleDonut._id}`}
                >
                  Author Profile: {singleDonut.email}
                </Link>
                <div key={singleDonut._id}>
                <p>{singleDonut.title}</p>
                <h3>{singleDonut.email}</h3>
                </div>
                <div>
                  <p><Link
                  href={`/donut/${singleDonut._id}`}
                  >See More</Link></p>
                </div>
               </div>
               </div>
                </>
            ))}
        </div>
    </section>
  )
}

export default DonutList