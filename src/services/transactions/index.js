const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://doomholderz@localhost:5432/users")
const Transaction = require("../../models/transactionModel")(sequelize, DataTypes)

const getFromDatabase = async (user_id) => {
    const transactions = await Transaction.findAll({
        where: {
          user_id: 39
        }, 
        raw: true,
        logging: false
      })
    return transactions
}

module.exports = { getFromDatabase }