const loginService = require("../services/login").loginUser
const sessionService = require("../services/session").token

const loginController = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const oauthRedirect = req.query.redirect_uri
    console.log("oauth " + oauthRedirect)

    const loggedIn = await loginService(email, password)
    if (!loggedIn) {
        res.end("unsucesful in controller login")
        return
    }
    await sessionService(loggedIn.id)
        .then((result) => res.cookie("authorization", result).status(200).end("success"))
}

module.exports = loginController