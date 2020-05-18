import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// Model

interface Movie {
    title: String,
    year: Number,
    rating: String,
    genre: String,
    director: String,
    description: String,
    date: String
}

// Data

const movies: Array<Movie> = [
    {
        title: 'Kids',
        year: 1995,
        rating: 'Unrated',
        genre: 'Drama',
        director: 'Larry Clark',
        description: 'Disturbing, dark, low-budget independent film about teen-agers in New York City.',
        date: '1 September 1995'
    },
    {
        title: 'Taxi Driver',
        year: 1979,
        rating: 'R',
        genre: 'Crime',
        director: 'Martin Scorsese',
        description: 'Travis Bickle is an ex-Marine and Vietnam War veteran living in New York City...',
        date: '9 February 1976'
    }
]

// Controllers

export const getMovies = async ({response} : {response: any}) => {
    response.body = movies
}

export const addMovie = async ({ request, response} : {request: any, response: any}) => {
    const body = await = request.body()
    const movie: Movie = body.value
}

const router = new Router()


