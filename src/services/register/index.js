const validateEmail = require("../uniqueEmail").confirmUniqueEmail
const hashPassword = require("./generatePasswordHash").hashPassword
const addToDatabase = require("./addUserToDatabase").addToDatabase

const registerUser = async (email, password)  => {
    try {
        const isUniqueEmail = await validateEmail(email)

        if (!isUniqueEmail) {
            return false
        }

        const hashedPassword = await hashPassword(password)
        await addToDatabase(email, hashedPassword)
        console.log("successfully added to database")
        return true
        
    } catch (error) {
        return error
    }
}

module.exports = { registerUser }