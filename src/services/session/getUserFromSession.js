const jwt = require("jsonwebtoken")

const validToken = (sessionToken) => {
    if (!sessionToken) {
        return Error("No session token")
    }
    try {
        const valid = jwt.verify(sessionToken, "secretValue")
        return valid
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return Error(error.message)
        }
        return Error(error.message)
        //return error
    }
    //return valid
}

module.exports = { validToken }