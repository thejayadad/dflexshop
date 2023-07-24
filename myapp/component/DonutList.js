"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DonutCard from "./DonutCard";
import Link from "next/link";

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
      }, []);

  return (
    <section>
        <div>
            {allDonuts.map((singleDonut) => (
                <>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div
              className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"

              >
              <img
                      src={singleDonut.imageUrl}
                      alt={singleDonut.title}
                      className="object-cover w-full h-64"
                    />
           
                <Link
                href={`/profile/${singleDonut._id}`}
                >
                  {singleDonut.email}
                </Link>
                <div key={singleDonut._id}>
                <p>{singleDonut.title}</p>
                <h3>{singleDonut.email}</h3>
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