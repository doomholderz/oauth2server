module.exports = (sequelize, DataTypes) => {
    return Consent = sequelize.define("Consent", {
        userId: {
            type: DataTypes.STRING
        },
        consent: {
            type: DataTypes.STRING
        }
      })
}

/*
CREATE TABLE users (
user_id uuid DEFAULT uuid_generate_v4 (),
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR NOT NULL,
password VARCHAR NOT NULL,
PRIMARY KEY (user_id)
);

*/ 