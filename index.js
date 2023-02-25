const express = require("express")
require("dotenv").config()

//create server express

const app = express()

//public route
app.use(express.static("public"))

app.use("/api/auth", require("./routes/auth"))

//Listen requests
app.listen(process.env.PORT, () => {
  console.log(`Running server on port: ${process.env.PORT} `)
})
