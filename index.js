import express from "express"
import * as dotenv from 'dotenv' 
import mongoose from 'mongoose'

import { rowCreateValidation, rowUpdateValidation } from "./validations/row.js"
import { RowController } from "./controllers/index.js"


const app = express()

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECT_LINK)
  .then(() => { console.log('MongoDB connect OK!') })
  .catch((err) => { console.log(`MongoDB connect Error: ${err}`) })

const port = process.env.PORT || 4000
const prefix = process.env.PREFIX


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.get(`${prefix}list`, RowController.getAll)
app.post(`${prefix}create`, rowCreateValidation, RowController.create)
app.delete(`${prefix}:id/delete`, RowController.remove)
app.post(`${prefix}:id/update`, rowUpdateValidation, RowController.update)


app.listen(port, (err) => {
    if (err) {
        return console.log({ err });
    }
    console.log(`Server start on port ${port}`)
})