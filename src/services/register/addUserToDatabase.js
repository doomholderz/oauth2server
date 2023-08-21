const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://doomholderz@localhost:5432/users")
const User = require("../../models/userModel")(sequelize, DataTypes)

const addToDatabase = async (email, password_hash) => {
    try {
        User.create({
            firstName: "Joseph", 
            lastName: "Harris", 
            email: email, 
            password: password_hash
        })
        return true
    } catch (error) {
        return error
    }
}

module.exports = { addToDatabase }