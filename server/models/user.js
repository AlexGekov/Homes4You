const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        match: /^[A-Za-z0-9]+$/,
        required: true
    }
})

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})


const user = mongoose.model("User", userSchema)

module.exports = user