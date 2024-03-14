const express = require('express')
const routes = require('./routes.js')
const {auth} = require("./middlewares/authenticate.js")

const app = express()

const PORT = 3030

const expressConfig = require('./configs/expressConfig.js')
const setCORS = require('./middlewares/corsMiddleware.js')
const dbConnect = require('./configs/DbConfig.js')

dbConnect()
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log(`Db crashed with ${err}`))
expressConfig(app)
setCORS(app)

app.use(routes)
app.use(auth)

app.listen(PORT, () => console.log(`REST server is listening on port: ${PORT}`))