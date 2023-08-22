const loginService = require("../services/login").loginUser
const sessionService = require("../services/session").token

const loginController = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const oauthRedirect = req.query.redirect_uri
    const client_id = req.query.client_id

    const oauthConditional = (result) => {
        if (oauthRedirect) {
            if (client_id) {
                res.cookie("authorization", result).status(200).redirect(`/oauth/authorize?redirect_uri=${oauthRedirect}&client_id=${client_id}`)
            } else {
                res.cookie("authorization", result).status(200).redirect(`/oauth/authorize?redirect_uri=${oauthRedirect}`)
            }
        } else {
            res.cookie("authorization", result).status(200).redirect("/register")
        }
    }

    const loggedIn = await loginService(email, password)
    if (!loggedIn) {
        res.end("Unsuccessful authentication.")
        return
    }
    await sessionService(loggedIn.id)
        //.then((result) => res.cookie("authorization", result).status(200).redirect("/register"))
        .then((result) => oauthConditional(result))
}

module.exports = loginController