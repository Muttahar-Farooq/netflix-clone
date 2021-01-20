import React, { useState, useEffect } from 'react'
import requests from '../request';
import axios from './axios'
import '../row.css';

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

export function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.log(movies);
            return request;
        }
        
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
           <h2>{title}</h2>
            
            <div className="row_posters">
                {movies.map(movie => (
                    <img className="img_posters" key={movie.id} src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                ))}
            </div>

        </div>
    )
}