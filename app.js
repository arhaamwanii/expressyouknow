const express = require('express')

const app = express()

app.use("/" , ({req , res , next}) => {
    console.log("/ log")
    next()
})

app.use("/newpage" , ({req , res , next })=>{

    res.send("<form action='product' method='POST'><input type='text' name='title'> <button type='submit'>Add Product</button></form>")
})

app.use('/product' , ({req , res , next})=>{
    console.log(req.body)
    res.redirect('/new')
})

app.use("/new" , ({req , res , next}) => {
    console.log("this is the new page"  )

})

app.listen(3000)

// what to learn next
