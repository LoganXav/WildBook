import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: [String],
    },
    category: {
        type: String,
    },
    coverImageUrl: {
        type: String,
    },
    articleImageUrl: {
        type: [String]
    },
    mainContent: {
        type: [String],
        required: true,
    },
    quote: {
        type: String,
    },
    quotedPerson: {
        type: String,
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

export default mongoose.model("Article", ArticleSchema)