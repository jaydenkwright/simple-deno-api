import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { host } from './host.ts'
import { movies } from './api.ts'

await init()
const client = new MongoClient()
client.connectWithUri(host)

const dbName = client.database("test")
export const collection = dbName.collection("movies");

const mov = await collection.find()

console.log(mov)