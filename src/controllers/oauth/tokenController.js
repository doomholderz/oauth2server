const { authorizationCodeLookup } = require("../../services/oauth/token/authCodeLookup")
const clientAuthenticate = require("../../services/oauth/token/clientAuthenticate")
const { generateAccessToken } = require("../../services/oauth/token/generateAccessToken")

const tokenController = async (req, res) => {

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
    const authorizationCode = await authorizationCodeLookup(client_id, authorization_code)

    if (!authorizationCode[0]) {
        console.log("Credentials correct, but authorization code doesn't exist")
        return
    }

    const user_id = authorizationCode[0].userId
    const scopes = authorizationCode[0].scopes

    const accessToken = generateAccessToken(user_id, client_id, scopes)
    console.log(accessToken)

    // should redirect with the access token in authorization header (I think?)
    // res.header("Authorization", accessToken)
    // res.redirect(redirect_uri)
}

module.exports = tokenController
/*
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=test_client_id&client_secret=test_client_secret" \
  http://localhost:3000/token

  INSERT INTO "Clients" ("id", "clientSecret", "clientId", "createdAt", "updatedAt") VALUES (5, 'test_client_secret', 'test', '2023-08-22 19:29:54.999', '2023-08-22 19:29:54.999');*/