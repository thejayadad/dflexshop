import mongoose from "mongoose";

const DonutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    imageUrl: {
        type: String,
        required: true,
    },

    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    email: {
        type: String
    }
}, {timestamps: true})

export default mongoose?.models?.Donut || mongoose.model("Donut", DonutSchema)