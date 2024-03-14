const express = require("express")

function expressConfig(app) {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
}

module.exports = expressConfig