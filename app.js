const express = require('express')

const app = express()

app.use("/" , () => {
    console.log("/ log")
})

app.use("/newpage" , ()=>{
    console.log("newpage log")
})

app.listen(3000)


