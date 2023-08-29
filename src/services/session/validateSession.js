const jwt = require("jsonwebtoken")

const validToken = (sessionToken) => {
    try {
        const valid = jwt.verify(sessionToken, "secretValue")
        return valid
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return Error(error.message)
        }
        //return error
    }
    //return valid
}

module.exports = { validToken }