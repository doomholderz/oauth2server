const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://doomholderz@localhost:5432/users")
const Consent = require("../../models/consentModel")(sequelize, DataTypes)
const Authorization = require("../../models/authorizationModel")(sequelize, DataTypes)
const crypto = require("crypto")

const queryConsent = async (user_id, client_id) => {
    try {
        const user = await Consent.findAll({
            where: {
              userId: user_id.toString(),
              consent: client_id
            }, 
            raw: true,
            logging: false
          })
        return user
    } catch (error) {
        return error
    }
}

const addConsent = async (user_id, client_id) => {
    try {
        Consent.create({
            userId: user_id,
            consent: client_id
        })
        return true
    } catch (error) {
        return error
    }
}

const generateAuthorizationCode = () => {
    const authorizationCode = crypto.randomBytes(32).toString('hex')
    return authorizationCode
}

const storeAuthorizationCode = async (authorizationCode, client_id, user_id, scopes, expiration) => {
    try {
        Authorization.create({
            authorizationCode: authorizationCode,
            clientId: client_id,
            userId: user_id,
            scopes: scopes,
            expiration: expiration
        })
    } catch (error) {
        return error
    }
}

module.exports = { addConsent, queryConsent, generateAuthorizationCode, storeAuthorizationCode }

/*

CREATE TABLE "Consents" (
  "id" SERIAL PRIMARY KEY,
  "userId" VARCHAR NOT NULL,
  "consent" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

*/