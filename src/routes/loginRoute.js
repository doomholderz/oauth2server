const router = require("express").Router()
const loginController = require("../controllers/loginController")

router.post("/", loginController)
router.get("/", (req, res) => {
    res.render("login")
})

module.exports = router