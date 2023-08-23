const jwt = require("jsonwebtoken")

const generateAccessToken = (user_id, client_id, scope) => {
    const accessTokenPayload = {
        sub: user_id,
        aud: client_id,
        scope: scope,
        iat: 0,
        exp: 0
    }

    const accessToken = jwt.sign(accessTokenPayload, "foo")

    return accessToken
}

module.exports = { generateAccessToken }