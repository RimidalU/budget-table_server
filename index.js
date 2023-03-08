import express from "express";

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log({ err });
    }
    console.log(`Server start on port ${port}`);
})