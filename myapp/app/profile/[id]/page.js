'use client'
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DonutCard from "@/component/DonutCard";

const ProfilePage = ({ params }) => {
  const { data: session } = useSession();
  const [userDonuts, setUserDonuts] = useState([]);

  useEffect(() => {
    const fetchDonuts = async () => {
      try {
        const response = await fetch(`/api/user/${params.id}`);
        const data = await response.json();

        console.log("Received Data:", data);

        setUserDonuts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDonuts();
  }, []);

  return (
    <section>
      <div className="mx-auto">
        {userDonuts.length < 1 ? (
          <h3>Donuts Still In The Oven</h3>
        ) : (
          userDonuts.map((singleUserDonut) => (
          <DonutCard {...singleUserDonut} />
          ))
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
