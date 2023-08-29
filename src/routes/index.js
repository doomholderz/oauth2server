const router = require("express").Router()
const registerRoutes = require("./registerRoute")
const loginRoutes = require("./loginRoute")
const oauthRoutes = require("./oauthRoute")
const transactionRoutes = require("./transactionsRoute")

router.use("/register", registerRoutes)
router.use("/login", loginRoutes)
router.use("/oauth", oauthRoutes)
router.use("/transactions", transactionRoutes)

module.exports = router