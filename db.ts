import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { host } from './host.ts'

await init()
const client = new MongoClient()
client.connectWithUri(host)

const dbName = client.database("test")
export const collection = dbName.collection("movies");
