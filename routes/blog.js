const express = require('express')
const blogs = require('../data/blogs')
const router = express.Router()
const path = require("path")

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/index.html"))
    res.render("home")
})

router.get('/blog', (req, res) => {
    res.render("bloghome", {
        blogs: blogs
    })
    // res.sendFile(path.join(__dirname, "../templates/blog.html"))
})

router.get('/blog/:slug', (req, res) => {
    myblog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })

    res.render("blogpage", {
        topic: myblog[0].topic,
        image: myblog[0].image
    })
    // res.sendFile(path.join(__dirname, "../templates/blog.html"))
})

module.exports = router