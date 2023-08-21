const pg = require("pg")

const client = new pg.Client({
    user: "doomholderz",
    host: "localhost",
    database: "users",
    port: 5432
})
client.connect()