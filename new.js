const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use( "/sex" , (req , res , next) => {
    console.log("this is the thing we are here for")
    res.send("<form action='/site' method='POST'> <input name='title' type='text' > <button type='submit'>Add AASas</button> </form>")
    next();
})  

app.post("/site" , (req , res , next) => {
    // res.send("<h1>this is the crime scene</h1>")
    console.log(req.body)
    res.redirect("/")
})

app.use((req , res , next) => {
    console.log("in the middle ware")
    next();
})


app.listen(3000)


// by default the request does not parse the request
// by default which type of request a function the thing will need to execute for will be given 

// instead of using the app.use we can use app.get



