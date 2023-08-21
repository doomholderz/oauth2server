const bcrypt = require("bcrypt")
const saltRounds = 12

const hashPassword = async (password) => {
    const hash_password = await bcrypt.genSalt(saltRounds)
      .then(salt => {
        return bcrypt.hash(password, salt)
      })
      .catch(err => console.error(err.message))

    return hash_password
}

module.exports = { hashPassword }