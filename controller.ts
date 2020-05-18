import { Movie } from './models.ts'
import { movies } from './api.ts'

export const getMovies = async ({response} : {response: any}) => {
    response.body = movies
}

export const addMovie = async ({ request, response} : {request: any, response: any}) => {
    const body = await request.body()
    const movie: Movie = body.value

    movies.push(movie)
    response.body = {movieAdded: "Sucess"}
    response.status = 200

}