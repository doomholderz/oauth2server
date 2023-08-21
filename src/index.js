const express = require("express")
var path = require("path")
const cookieParser = require("cookie-parser");

const app = express()
const port = 3000
const router = require("./routes")

app.set('views', "./src/views")
app.set('view engine', 'ejs')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
//app.set('views', path.json(__dirname, 'views'))
app.use(router)

app.listen(port, () => {
    console.log("Server started.")
})