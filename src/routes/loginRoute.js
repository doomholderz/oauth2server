const router = require("express").Router()
const loginController = require("../controllers/loginController")

router.post("/", loginController)
router.get("/", (req, res) => {
    //console.log("login route " + req.query.redirect_uri)
    const redirect_uri = req.query.redirect_uri
    const client_id = req.query.client_id
    var queryParams = "/login?"
    if (redirect_uri) {
        queryParams += "redirect_uri=" + redirect_uri + "&"
    }
    if (client_id) {
        queryParams += "client_id=" + client_id
    }
    res.render("login", { loginEndpoint: queryParams })
})

module.exports = router