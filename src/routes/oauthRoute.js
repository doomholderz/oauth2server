const router = require("express").Router()
const oauthController = require("../controllers/oauthController")

router.get("/authorize", oauthController)

module.exports = router