import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Donut from "@/models/Donut";

export async function GET(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    try {
        const donut = await Donut.findById(id)

        return new Response(JSON.stringify(donut), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function PUT(req, ctx) {
    await db.connect()

    const id = ctx.params.id
    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(" ")[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const donut = await Donut.findById(id).populate('authorId')

        if (donut?.authorId?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only Author Can Delete Their Donut' }), { status: 403 })
        }

        const updatedDonut = await Donut.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })

        return new Response(JSON.stringify(updatedDonut), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function DELETE(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const donut = await Donut.findById(id).populate('authorId')
        if (donut?.authorId?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only Author Can Delete Their Donut' }), { status: 403 })
        }

        await Donut.findByIdAndDelete(id)

        return new Response(JSON.stringify({msg: 'Successfully deleted Donut'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 }) 
    }
}