module.exports = (sequelize, DataTypes) => {
    return Transaction = sequelize.define("Transaction", {
        user_id: {
            type: DataTypes.INTEGER
        },
        cost: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        merchantId: {
            type: DataTypes.STRING
        },
        itemId: {
            type: DataTypes.STRING
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
    "expiration" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );


  CREATE TABLE "Transactions" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "cost" VARCHAR,
  "date" TIMESTAMP,
  "merchantId" VARCHAR,
  "itemId" VARCHAR,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
        REFERENCES "Users"(id)
);

INSERT INTO "Transactions" VALUES ('2', 39, '7.99', '2023-08-21 18:28:55.419+01', 'merchant_abc', 'item_id_eofiwehfeoih', '2023-07-29 18:28:55.419+01', '2023-08-29 18:28:55.419+01');

so transactions should be mapped to user
each transaction will be:
- transactionId
- userId
- cost
- date
- merchantId
- itemId
  */