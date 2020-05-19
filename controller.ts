import { Movie } from './models.ts'
import { collection } from './db.ts'

export const getMovies = async ({response} : {response: any}) => {
    const movies: Movie[] = await collection.find()
    response.body = movies
}

export const getMovie = async ({params, response} : {params: any, response: any}) => {
    const movie = await collection.findOne({'_id': {"$oid": params.id}})
    response.body = movie
}

export const addMovie = async ({ request, response} : {request: any, response: any},) => {
    const body = await request.body()
    const movie: Movie = body.value

    const newMovie = await collection.insertOne(movie)

    response.body = {movieAdded: "Sucess"}
    response.status = 200

}