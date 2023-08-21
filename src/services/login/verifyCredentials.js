const bcrypt = require("bcrypt")

const verifyCredentials = async (password, hash) => {
    const compare = bcrypt.compare(password, hash)
        .then((result) => console.log("result is " + result))
    return compare
}

module.exports = { verifyCredentials }