import express from "express"
import * as dotenv from 'dotenv' 
import mongoose from 'mongoose'

const app = express()

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECT_LINK)
  .then(() => { console.log('MongoDB connect OK!') })
  .catch((err) => { console.log(`MongoDB connect Error: ${err}`) })

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log({ err });
    }
    console.log(`Server start on port ${port}`)
})