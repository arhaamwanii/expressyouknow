const express = require('express')

const app = express()

app.use('/' , ({req , res , next}) => {
    console.log(req)
    res.send("<h1>What is going on here?</h1>")
    next()
})

app.use('/' , ({req , res , next}) => {
    console.log(req)
    res.send("'<p>The Middleware that handles just /</p>'")
})

app.listen(3000)

