const jwt = require("jsonwebtoken")

const token = async (userId) => {
    let jwtToken = jwt.sign({ id: userId }, "secretValue", {
        expiresIn: "24h"
    })
    return jwtToken
}

module.exports = { token }