const { authorizationCodeLookup } = require("../../services/oauth/token/authCodeLookup")
const clientAuthenticate = require("../../services/oauth/token/clientAuthenticate")
const { generateAccessToken } = require("../../services/oauth/token/generateAccessToken")

const tokenController = async (req, res) => {
    // should be expecting a request as followed:
    // POST /token [HEADERS = content-type:application/x-www-form-urlencoded]
    // body: grant_type: authorization_code (this is all we're implementing currently), code: authorization_code, redirect_uri: same as in the original authentication request, code_verifier: if using PKCE, client_id, client_secret
    const grant_type = req.body.grant_type
    const authorization_code = req.body.code
    const redirect_uri = req.body.redirect_uri
    const client_id = req.body.client_id
    const client_secret = req.body.client_secret


    const authenticated = await clientAuthenticate.clientAuthenticate(client_id, client_secret)
    if (!authenticated[0]) {
        console.log("Credentials incorrect")
        return
    }
    // this means the client has authenticated successfully
    const authorizationCode = await authorizationCodeLookup(client_id, authorization_code)

    if (!authorizationCode[0]) {
        console.log("Credentials correct, but authorization code doesn't exist")
        return
    }

    const accessToken = await generateAccessToken(user_id, client_id, scope)

    
    

    // so we first need to authenticate the client with client_id and client_secret
    // then we need to check the grant_type as being authorization_code
    // then we need to query the Authorizations table in pg with client_id and authorization_code
    // if this returns a value (within exp time) then we can generate access token
    // we then return this via the redirect_uri
    // access token should be a JSON object
    /*
    {
        "access_token": "jwt",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "refresh token",
        "scope": "read write"
    }
    */

    /* 
    Services are:
    - clientAuthenticate(client_id, client_secret)
    = authorizationCodeLookup(client_id, code)
    - generateAccessToken(all JWT fields to allow stateless access)
    */
}

module.exports = tokenController
/*
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=test_client_id&client_secret=test_client_secret" \
  http://localhost:3000/token

  INSERT INTO "Clients" ("id", "clientSecret", "clientId", "createdAt", "updatedAt") VALUES (5, 'test_client_secret', 'test', '2023-08-22 19:29:54.999', '2023-08-22 19:29:54.999');*/