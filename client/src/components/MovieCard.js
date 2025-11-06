import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/movieCard.css'

const MovieCard = ({ movie }) => {
  if(!movie) return null

  return (
    <Link to={{ pathname: '/tickets',}} state={{ movieId: movie.id, movie: movie }} className='movie-card'>
      <div className='movie-info'>
        <div className='movie-detail'>
          <span className='label'>Title:</span>
          <span className='value'>{movie.title}</span>
        </div>
        <div className='movie-detail'>
          <span className='label'>Genre:</span>
          <span className='value'>{movie.genre}</span>
        </div>
      </div>      
    </Link>
  )
}

export default MovieCard