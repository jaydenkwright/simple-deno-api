import { Movie } from './models.ts'
import { collection } from './db.ts'

export const getMovies = async ({response} : {response: any}) => {
    const movies = await collection.find()
    response.body = movies
}

export const addMovie = async ({ request, response} : {request: any, response: any}) => {

}