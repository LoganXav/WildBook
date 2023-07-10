import mongoose from "mongoose";

const ArticleCoverSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    coverImageUrl: {
        type: String,
        required: true,
    },
    coverContent: {
        type: String,
        required: true,
    },
    access: {
        type: String,
        enum: ["Free", "Basic", "Premium"]
    },
    date: {
        type: String,
        required: true,
    }
}, { timestamps: true }
)

export default mongoose.model("ArticleCover", ArticleCoverSchema)