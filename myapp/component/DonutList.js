"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DonutCard from "./DonutCard";


const DonutList = () => {
    const { data: session } = useSession();
    const [allDonuts, setAllDonuts] = useState([]);

    useEffect(() => {
        const fetchDonuts = async () => {
          const response = await fetch(`/api/donut/`);
          const data = await response.json();
    
          setAllDonuts(data);
        };
    
        if (session?.user.id) fetchDonutts();
      }, []);

  return (
    <section>
        <div>
            {allDonuts.map((singleDonut) => (
                <DonutCard
                {...singleDonut}
                ></DonutCard>
            ))}
        </div>
    </section>
  )
}

export default DonutList