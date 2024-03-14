const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    Watch: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
})

const post = mongoose.model("Post", postSchema)

module.exports = post