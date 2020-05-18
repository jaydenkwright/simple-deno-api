import { Application } from "https://deno.land/x/oak/mod.ts";

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