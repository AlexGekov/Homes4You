const router = require("express").Router()
const userManager = require("../managers/userManager")

router.post("/register", async (req, res) => {
    const { email, username, password, repeatPassword } = req.body;
    try {
        let [user, token] = await userManager.register(email, username, password, repeatPassword)
        res.json({
            authToken: token,
            userId: user._id
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let [user, token] = await userManager.login(email, password)
        const ID = user._id.toString()
        res.cookie("authToken", token)
        res.cookie("userId", ID)
        res.json({
            authToken: token,
            userId: ID
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})


router.get('/getUser', async (req, res) => {
    const userId = req.cookies.userId
    try {
        const [user, authToken] = await userManager.findUser(userId)
        const ID = user._id.toString()
        res.cookie('authToken', authToken)
        res.cookie('userId', ID)
        res.json({
            email: user.email,
            username: user.username,
            userId: ID
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})


router.get("/:userId/profile", async (req, res) => {
    const userId = req.params.Id
    try {
        let user = await userManager.findUser(userId)
        res.json(user).end()
    } catch (error) {
        res.status(404)
    }
})


router.get("/logout", (req, res) => {
    res.clearCookie('authToken')
    res.clearCookie('userId')
    res.end()
})

module.exports = router