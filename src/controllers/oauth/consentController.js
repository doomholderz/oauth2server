const consent = require("../../services/oauth")
const jwt_decode = require("jwt-decode")

const consentController = async (req, res) => {
    const client_id = req.query.client_id
    const redirect_uri = req.query.redirect_uri

    const user_id = jwt_decode(req.cookies.authorization).id

    consent.addConsent(user_id, client_id)
    res.redirect(`/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`)
    //.then(() => res.redirect(`/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`))
        

    
    // validate the sessionToken

    // lookup if user has previously given consent (in pg)

    // if user hasn't given consent, redirect to GET /consent
    // /consent should dynamically show scopes for client_id request
    // /consent Consent button should make POST request to /consent
    // POST /consent should store consent for scopes + client_id in pg
    // POST /consent should then redirect back to oauthcontroller maintaining client_id and redirect_uri (?)

    
}

module.exports = consentController
