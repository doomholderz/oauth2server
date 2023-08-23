const consent = require("../../services/oauth")
const jwt_decode = require("jwt-decode")

const oauthController = async (req, res) => {
    const client_id = req.query.client_id
    if (!client_id) {
        res.redirect(`/oauth/authorize`)
        return
    }
    const redirect_uri = req.query.redirect_uri
    if (!redirect_uri) {
        res.redirect(`/oauth/authorize`)
        return
    }
    const sessionToken = req.cookies.authorization
    if (!sessionToken) {
        console.log("no session")
        res.redirect(`/login?client_id=${client_id}&redirect_uri=${redirect_uri}`)
        return
    }
    // validate session token signature
    // validate iat and exp

    // introspect the session token to get user_id
    const user_id = jwt_decode(sessionToken).id


    const consentGiven = await consent.queryConsent(user_id, client_id)
    if (!consentGiven[0]) {
        console.log("no consent given by user")
        res.redirect(`/oauth/consent?client_id=${client_id}&redirect_uri=${redirect_uri}`)
        return
    }

    var date = new Date()
    date.setHours(date.getHours() + 3)
    var newDate = date.toISOString()
    // for now there is no limit on authorization codes that can be requested
    const authorizationCode = consent.generateAuthorizationCode()
    consent.storeAuthorizationCode(authorizationCode, client_id, user_id, [])
    res.send(authorizationCode)
}

module.exports = oauthController
