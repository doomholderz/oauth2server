const validateEmail = require("../uniqueEmail").confirmValidEmail
const verifyCredentials = require("./verifyCredentials").verifyCredentials
const bcrypt = require("bcrypt")

const loginUser = async (email, password) => {
    const user = await validateEmail(email)
    if (!user || user.length === 0) {
        return false
    }
    try {
        const userDetails = user[0]
        const hashPassword = userDetails["password"]
        const comparePassword = await bcrypt.compare(password, hashPassword)

        if (comparePassword) {
            const returnObject = {
                "id": userDetails.id
            }
            return returnObject
        } else {
            return null
        }

    } catch (error) {
        return error
    }
}

module.exports = { loginUser }
