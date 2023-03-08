import express from "express"
import * as dotenv from 'dotenv' 

const app = express()

dotenv.config()
app.use(express.json())

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