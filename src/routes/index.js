const router = require("express").Router()
const registerRoutes = require("./registerRoute")
const loginRoutes = require("./loginRoute")
const oauthRoutes = require("./oauthRoute")

router.use("/register", registerRoutes)
router.use("/login", loginRoutes)
router.use("/oauth", oauthRoutes)

module.exports = router