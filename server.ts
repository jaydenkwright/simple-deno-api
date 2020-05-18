import { serve } from 'https://deno.land/std/http/server.ts'
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getMovies, addMovie } from './controller.ts'

const router = new Router()
const app = new Application()
const PORT = 5000

router
    .get("/movies", getMovies)
    .post("/add", addMovie)

app.use(router.routes())
app.use(router.allowedMethods())

console.log('server running...')

await app.listen({ port: PORT })


