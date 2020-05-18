import "https://deno.land/x/denv/mod.ts";
import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { movies } from './api.ts'

const host: any = Deno.env.get('DB_HOST_URL')
await init()
const client = new MongoClient()
console.log(host)
client.connectWithUri(Deno.env.get('DB_HOST_URL'))

const db = client.database("test")
const moviesDb = db.collection("movies");
//console.log(movies)
const insertId = await moviesDb.insertMany(movies);

