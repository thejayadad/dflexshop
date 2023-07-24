import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Donut from "@/models/Donut";

export async function PUT(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(" ")[1]

    console.log(token)

    const decodedToken = verifyJwtToken(token)




    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const donut = await Donut.findById(id)
        
        if(donut.likes.includes(decodedToken._id)){
          donut.likes = donut.likes.filter((id) => id.toString() !== decodedToken._id.toString())
        } else {
            donut.likes.push(decodedToken._id)
        }
    
        await donut.save()

        return new Response(JSON.stringify({msg: 'Successfully interacted with the donut'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 200 })
    }
}