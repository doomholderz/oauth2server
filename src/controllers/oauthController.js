const oauthController = async (req, res) => {
    const client_id = req.query.client_id
    if (!client_id) {
        res.end("client_id must be specified")
    }
    const redirect_uri = req.query.redirect_uri
    if (!redirect_uri) {
        res.end("redirect_uri must be specified")
    }
    const sessionToken = req.cookies.authorization
    if (!sessionToken) {
        console.log("no session")
        res.redirect(`/login?client_id=${client_id}&redirect_uri=${redirect_uri}`)
    }
    
    // validate the sessionToken

    
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