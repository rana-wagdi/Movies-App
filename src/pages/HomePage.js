import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from '../Components/MovieCard';

import '../styles/homePage.css'

export default function HomePage() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=4687d8cd18948e76118e0779782ef33e')
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    })
    return (
        <>
            <div  sx={{ flexGrow: 1, p: 3 }} className='movies'>
            {movies.map((movie) => {

                return (
                    <>
                        <div  key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    </>
                )
            })}
            </div>
        </>
    )
}
