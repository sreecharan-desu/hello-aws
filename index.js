import express from "express"
import cors from "cors"


const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World from EC2!")
})

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080")
})  