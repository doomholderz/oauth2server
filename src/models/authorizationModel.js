module.exports = (sequelize, DataTypes) => {
    return Authorization = sequelize.define("Authorization", {
        authorizationCode: {
            type: DataTypes.STRING
        },
        clientId: {
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