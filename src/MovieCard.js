import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie, setSelectMovie, setGenre, actors}) => {

    const API_IMG="https://image.tmdb.org/t/p/w500"

  return (
    <div key={movie.id} className="card" onClick = {()=>{
      setSelectMovie(movie)
      setGenre(movie.genre_ids)
      actors(movie.id)
      }}>
        <div className="poster">
            <img src = {movie.poster_path !== null ? API_IMG + movie.poster_path : "https://unsplash.com/photos/EEZgog4AS5M"} alt ="movie img"/>
        </div>

        <div className = "info">
            <p className = 'title'>{movie.title}</p>
            <p className='vote'>{movie.vote_average}</p>
        </div>

    </div>
  )
}

export default MovieCard