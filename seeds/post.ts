import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("post").del();

    const seedData = [
        {
            title: "Post 1",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Post 2",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: "Post 3",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]

    // Inserts seed entries
    await knex("post").insert(seedData);
};
