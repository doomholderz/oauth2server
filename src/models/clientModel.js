module.exports = (sequelize, DataTypes) => {
    return Client = sequelize.define("Client", {
        clientId: {
            type: DataTypes.STRING
        },
        clientSecret: {
            type: DataTypes.STRING
        }
      })
}

/*
CREATE TABLE "Authorizations" (
  "id" SERIAL PRIMARY KEY,
  "authorizationCode" VARCHAR NOT NULL,
  "clientId" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 */