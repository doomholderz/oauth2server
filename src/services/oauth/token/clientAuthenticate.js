const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://doomholderz@localhost:5432/users")
const Client = require("../../../models/clientModel")(sequelize, DataTypes)

const clientAuthenticate = async (client_id, client_secret) => {
    const client = await Client.findAll({
        where: {
            clientId: client_id,
            clientSecret: client_secret
        }, 
        raw: true,
        logging: false
    })
    return client
}

module.exports = { clientAuthenticate }
