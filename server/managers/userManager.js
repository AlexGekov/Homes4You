const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("../lib/jwt")
const { SECRET } = require("../configs/SuperSecret")

exports.register = async (email, username, password, repeatPassword) => {
    const passwordLength = 6
    const emailLength = 10
    const usernameLength = 5


    if (email.length <= emailLength) {
        throw new Error(`Email should be at least ${emailLength} characters long`)
    }
    if (username.length <= usernameLength) {
        throw new Error(`Username should be at least ${usernameLength} characters long`)
    }
    if (password.length < passwordLength) {
        throw new Error(`Password should be at least ${passwordLength} characters long`)
    }
    if (repeatPassword !== password) {
        throw new Error(`Repeat-Password should match password!`)
    }

    let user = await User.create({ username, email, password })

    console.log(user)

    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    }

    const token = await jwt.sign(payload, SECRET);

    return [payload, token]

}

exports.login = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error("Cannot find email or password")
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error("Cannot find email or password")
    }

    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    }

    const token = await jwt.sign(payload, SECRET);

    return [payload, token]
}

exports.findUser = async (userId) => {
    const user = await User.findById(userId)

    if (user) {
        return getAuthResult(user)
    } else {
        throw new Error('Invalid userId!')
    }
}

async function getAuthResult(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username
    }

    const token = await jwt.sign(payload, SECRET)

    return [payload, token]
}
