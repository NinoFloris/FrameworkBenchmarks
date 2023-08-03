import postgres from "postgres";

const sql = postgres({
  host: "tfb-database",
  user: "benchmarkdbuser",
  password: "benchmarkdbpass",
  database: "hello_world",
  max: 1
});

export const fortunes = async () => await sql`SELECT id, message FROM fortune`;

export const find = async (id) => await sql`SELECT id, randomNumber FROM world WHERE id = ${id}`.then((arr) => arr[0]);

export const update = async (obj) => await sql`UPDATE world SET randomNumber = ${obj.randomNumber} WHERE id = ${obj.id}`;
