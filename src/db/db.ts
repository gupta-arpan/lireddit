import knex from "knex";
import config from "src/config";

export const liredditDb = knex({
    client: "pg",
    connection: {
        host: config.get("liredditDb.host"),
        port: config.get("liredditDb.port"),
        user: config.get("liredditDb.user"),
        password: config.get("liredditDb.password"),
        database: config.get("liredditDb.database"),
    },
    pool: { min: 5, max: 30 },
})