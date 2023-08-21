const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://doomholderz@localhost:5432/users")
const User = require("../models/userModel")(sequelize, DataTypes)

const confirmUniqueEmail = async (email) => {
    const user = await User.findAll({
      where: {
        email: email
      }, 
      raw: true,
      logging: false
    })
    if (!user.length) {
        return true
    }
    return false
  }

const confirmValidEmail = async (email) => {
  const user = await User.findAll({
    where: {
      email: email
    }, 
    raw: true,
    logging: false
  })
  return user
}

module.exports = { confirmUniqueEmail, confirmValidEmail }