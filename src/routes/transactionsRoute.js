const router = require("express").Router()
const transactionService = require("../services/transactions").getFromDatabase
const validateToken = require("../services/session/validateSession").validToken
//const transactionController = require("../controllers/transactionController")

//dataToDisplay = ["Joe", "Elizabeth"]

router.get("/", async (req, res) => {
    const sessionToken = req.cookies.authorization
    if (!sessionToken) {
        res.end("Not authorised, should be redirected to login page")
        return
    }
    const valid = validateToken(sessionToken)
    if (valid instanceof Error) {
        res.end("error: " + valid.message)
        return
    }
    console.log("token is valid, able to access resources for user")
    const user_id = valid.id
    dataToDisplay = await transactionService(user_id)
        .then((data) => { res.render("transactions", { transactions: data })})
    //console.log(dataToDisplay)
    

    // get the userId from session token

    //dataToDisplay = transactionService(39)
    //console.log(dataToDisplay)
    //res.render("transactions", { transactions: dataToDisplay })
})
//router.post("/", transactionController)

module.exports = router

// If i wanted to get just the most recent 10
// I could simply order by createdAt and limit(10)
// then for infinite scrolling I could do a more sophisticated SQL query
// I think ultimately it comes down to the SQL queries...

// I need to add lots of entries into transactions, with reference to users
// Then for a given user, I should be able to look into all of their transactions alone, order them by createdAt so that we can see from most recent to least recent, and display a limited number of these on screen
// this needs to be done via JWT authorization, whereby we have some token introspection and verification