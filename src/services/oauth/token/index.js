const authCodeLookup = require("./authCodeLookup")
const clientAuthenticate = require("./clientAuthenticate")
const generateAccessToken = require("./generateAccessToken")

const token = (user_id, client_id, scope, client_secret, authorization_code) => {

}

module.exports = { token }

// token should be a factory? as we're returning a JSON object, and so it should just be callable to generate a new Token()?