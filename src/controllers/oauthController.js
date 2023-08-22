const consent = require("../services/oauth")
const jwt_decode = require("jwt-decode")

const oauthController = async (req, res) => {
    const client_id = req.query.client_id
    if (!client_id) {
        res.redirect(`/oauth/authorize`)
        return
        //res.end("client_id must be specified")
        
    }
    const redirect_uri = req.query.redirect_uri
    if (!redirect_uri) {
        res.redirect(`/oauth/authorize`)
        return
        //res.end("redirect_uri must be specified")
        
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
        //consent.addConsent(user_id, client_id)
    }
    
    // validate the sessionToken

    // lookup if user has previously given consent (in pg)

    // if user hasn't given consent, redirect to GET /consent
    // /consent should dynamically show scopes for client_id request
    // /consent Consent button should make POST request to /consent
    // POST /consent should store consent for scopes + client_id in pg
    // POST /consent should then redirect back to oauthcontroller maintaining client_id and redirect_uri (?)
    const authorizationCode = consent.generateAuthorizationCode()
    consent.storeAuthorizationCode(authorizationCode, client_id)
    res.send(authorizationCode)
    //console.log("authorization code is: " + authorizationCode)
    
}

module.exports = oauthController

/*
- The `GET /oauth/authorize` endpoint:
    - Stores the parameters `client_id` and `redirect_url`
    - Checks if the user is authenticated via a call to the async `userAuthenticated` service
        - This checks if a session token is present in the cookies of the request
            - If session token is present, validate
                - If valid session token, return true
                - If invalid session token, return false
            - If the session token isn’t present, return false
    - If `userAuthenticated` === true (Promise) then continue to consent
    - If `!userAuthenticated`:
        - Redirect to `/login?redirect_url=X&client_id=Y`
            - This makes a `GET` request to the `/login` endpoint, wherein a user must input their credentials and login
            - Upon successful login, if `redirect_url` is set, then redirect to `/oauth/authorize` with the query parameters set from the original context
*/