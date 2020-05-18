import { serve } from 'https://deno.land/std/http/server.ts'

const server = serve({port: 5000})

for await (const req of server){
    req.respond({body: 'hello'})
}

