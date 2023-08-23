const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://doomholderz@localhost:5432/users")
const Authorization = require("../../../models/authorizationModel")(sequelize, DataTypes)

const authorizationCodeLookup = async (client_id, code) => {
    const authorizationCode = await Authorization.findAll({
        where: {
            clientId: client_id,
            authorizationCode: code
        }, 
        raw: true,
        logging: false
    })
    return authorizationCode
}

module.exports = { authorizationCodeLookup }