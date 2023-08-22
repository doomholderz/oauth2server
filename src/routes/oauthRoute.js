const router = require("express").Router()
const oauthController = require("../controllers/oauthController")
const consentController = require("../controllers/consentController")

router.get("/authorize", oauthController)
router.post("/consent", consentController)
router.get("/consent", (req, res) => {
    const redirect_uri = req.query.redirect_uri
    const client_id = req.query.client_id
    var queryParams = "/oauth/consent?"
    if (redirect_uri) {
        queryParams += "redirect_uri=" + redirect_uri + "&"
    }
    if (client_id) {
        queryParams += "client_id=" + client_id
    }
    res.render("consent", { consentEndpoint: queryParams })
})

module.exports = router