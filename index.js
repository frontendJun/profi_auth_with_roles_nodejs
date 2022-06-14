const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5500
const path =require('path')

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
/*app.get('/', (req, res) => {
    res.status(200)
    console.log("TEst")
   res.sendFile(path.join(__dirname, 'view', 'index.html' ))
})*/
app.use(express.static(__dirname + '/public'));

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://shadi:123@clusterauth.eb6e07i.mongodb.net/user?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

