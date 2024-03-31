const post = require("../models/post")

exports.GetAll = () => post.find().lean()

exports.Find = (Id) => post.findById(Id).lean()

exports.create = async (Data) => {
    const kindLength = 4
    const nameLength = 3
    const descriptionLength = 10

    if (Data.kind.length <= kindLength) {
        throw new Error(`Kind should be at least ${kindLength} characters long`)
    }
    if (Data.name.length <= nameLength) {
        throw new Error(`Name should be at least ${nameLength} characters long`)
    }
    if (Data.year <= 1930 && Data.year >= 2024) {
        throw new Error(`Year is from 1930 until the current year!`)
    }
    if (Data.description.length < descriptionLength) {
        throw new Error(`Description should be at least ${descriptionLength} characters long`)
    }
    if (!Data.image.startsWith("https://") && !Data.image.startsWith("http://")) {
        throw new Error(`Image should start with "https://" or "http://"`)
    }

    await post.create(Data)
}

exports.search = async (Param) => {
    let result = await post.find().lean()
    result = result.filter(post => post.name.toLowerCase().includes(Param.toLowerCase()))
    return result
}

exports.Delete = (Id) => post.findByIdAndDelete(Id)

exports.Edit = (Id, Data) => post.findByIdAndUpdate(Id, Data)

exports.Watch = async (Id, ownerId) => {
    const curPost = await post.findById(Id)
    console.log(curPost)
    console.log(ownerId)
    curPost.Watch.push(ownerId)
    return curPost.save()
}

exports.FindAllPostsByUser = async (userId) => {
    let result = await post.find().lean()
    result = result.filter(post => post.owner == userId)
    return result
}

exports.SearchPostsByUser = async (search, userId) => {
    let result = await post.find().lean()
    result = result.filter(post => post.owner == userId)
    result = result.filter(post => post.name.toLowerCase().includes(search.toLowerCase()))
    return result
}

