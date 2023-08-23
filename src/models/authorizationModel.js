module.exports = (sequelize, DataTypes) => {
    return Authorization = sequelize.define("Authorization", {
        authorizationCode: {
            type: DataTypes.STRING
        },
        clientId: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.STRING
        },
        scopes: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: () => new Date(Date.now() + 60*60*1000)
        }
      })
}

/*
CREATE TABLE "Authorizations" (
  "id" SERIAL PRIMARY KEY,
  "authorizationCode" VARCHAR NOT NULL,
  "clientId" VARCHAR NOT NULL,
  "userId" VARCHAR NOT NULL,
  "scopes" VARCHAR[] NOT NULL,
  "expiration" DATE NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 */