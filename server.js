const express = require('express')

const app = express()

app.use("/users" , (req , res , next) => {
    console.log("one of the main things")
    res.send('<h1>This is the new page!</h1>')

})
app.use("/" , (req , res , next) => {
    console.log("one of the main things")
    res.send('<h1>Hello form Express!</h1>')
})

app.listen(3000)





// 