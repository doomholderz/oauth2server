const jwt = require("jsonwebtoken")

const generateAccessToken = (user_id, client_id, scope) => {
    const accessTokenPayload = {
        sub: user_id,
        aud: client_id,
        scope: scope,
        iat: 0,
        exp: 0
    }

    const accessTokenJWT = jwt.sign(accessTokenPayload, "foo")

    const accessToken = {
        access_token: accessTokenJWT,
        token_type: "bearer",
        expires_in: 3600,
        scope: scope
    }

    return accessToken
}

module.exports = { generateAccessToken }