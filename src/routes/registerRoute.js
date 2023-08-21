const router = require("express").Router()
const registerController = require("../controllers/registerController")

router.get("/", (req, res) => {
    res.render("register")
})
router.post("/", registerController)

module.exports = router