import React from 'react';
import MovieListItems from './MovieListItem/MovieListItem'
import Button from '../Navigation/Button'
import './Movies.css';

const Movies = ({
    movies,
    page,
    onPageIncrease,
    onPageDecrease
    }) => (
    <section >
        <ul className='movies'>
        {
        movies.map((movie, index) => (
            <MovieListItems movie={movie} key={index.toString()} />
        ))
        }
        </ul>
        <div className="pagination">
        <Button onClick={onPageDecrease}>
          Prev
        </Button>
        <span>{`Page ${page}`}</span>
        <Button onClick={onPageIncrease}>
          Next
        </Button>
        </div>

    </section>
)

export default Movies;
