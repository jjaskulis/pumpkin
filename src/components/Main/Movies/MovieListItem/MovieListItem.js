import React from 'react'
import {Link} from 'react-router-dom'
import './MovieListItem.css'

const MovieListItem = ({movie}) => {
    const {id,title, poster_path, release_date, vote_average} = movie;
    const year = release_date.substring(0,4);
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    return(
            <li className='movie-item'>
                <Link to={`/movie/${id}`} className='thumbnail'>
                    <img src={imgUrl} alt=''/>
                    <div className='movie-description'>
                    <h2>{title}</h2>
                    <section className='movie-details'>
                        <div className='movie-year'>
                            <span className='title'>Year</span>
                            <span>{year}</span>
                        </div>
                        <div className='movie-rating'>
                            <span className='title'>Rating</span>
                            <span>{vote_average}</span>
                        </div>
                    </section>
                    </div>
                </Link>
            </li>
    )
}

export default MovieListItem