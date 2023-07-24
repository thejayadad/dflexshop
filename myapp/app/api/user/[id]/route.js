import Donut from "@/models/Donut";
import db from "@/lib/db";

export const GET = async (request, { params }) => {
    try {
        await db.connect()
  
      const userDonuts = await Donut.find({ _id: params.id })
  
      return new Response(JSON.stringify(userDonuts), { status: 200 });
    } catch (error) {
      return new Response("Failed to fetch Donuts", { status: 500 });
    }
  };