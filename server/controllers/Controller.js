const router = require("express").Router()
const Manager = require("../managers/Manager")

router.get("/catalog", async (req, res) => {
    try {
        let posts = await Manager.GetAll()
        res.json(posts).end()
        console.log("Sending posts...")
    } catch (err) {
        res.status(404)
    }
})


router.get("/catalog/:search", async (req, res) => {
    let search = req.params.search
    try {
        let posts = await Manager.search(search)
        res.json(posts).end()
    } catch (err) {
        res.status(404)
    }
})

router.post("/create", async (req, res) => {
    const { kind, name, year, description, image, owner } = req.body
    console.log({ kind, name, year, description, image, owner })
    try {
        await Manager.create({ kind, name, year, description, image, owner })
        console.log("created")
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.get("/catalog/:postId/details", async (req, res) => {
    console.log("Loading details...")
    const postId = req.params.postId
    try {
        const post = await Manager.Find(postId)
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})

router.get("/catalog/:search/:userId", async (req, res) => {
    const search = req.params.search
    const userId = req.params.userId
    try {
        const posts = await Manager.SearchPostsByUser(search, userId)
        console.log(posts)
        res.json(posts).end()
    } catch (err) {
        res.status(404)
    }
})

router.get("/:userId/catalog", async (req, res) => {
    const userId = req.params.userId
    try {
        const posts = await Manager.FindAllPostsByUser(userId)
        res.json(posts).end()
    } catch (err) {
        res.status(404)
    }
})


router.get("/:postId/want", async (req, res) => {
    try {
        await Manager.GetWants(postId)
        res.end()
    } catch (err) {
        res.status(404)
    }
})

router.post("/:postId/want", async (req, res) => {
    const { postId, userId } = req.body
    try {
        await Manager.Want(postId, userId)
        res.end()
    } catch (err) {
        res.status(404)
    }
})

router.delete("/:postId/details", async (req, res) => {
    console.log("here")
    const postId = req.params.postId
    try {
        const post = await Manager.Delete(postId)
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})


router.put("/:postId/edit", async (req, res) => {
    const postId = req.params.postId
    const { kind, name, manufacturer, description, image, } = req.body
    try {
        const post = await Manager.Edit(postId, { kind, name, manufacturer, description, image })
        res.json(post).end()
    } catch (err) {
        res.status(404)
    }
})

module.exports = router
