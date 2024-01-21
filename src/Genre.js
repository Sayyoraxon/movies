import React from 'react'
import './Genre.css'

function Genre({setUrl}) {
  return (
    <div className='genres'>
        <div>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=28")}>Action</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=12")}>Advanture</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=16")}>Animation</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=35")}>Comedy</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=80")}>Crime</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=99")}>Documentory</button> 
        </div>
        <div>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=18")}>Drama</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=10751")}>Family</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=14")}>Fantasy</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=36")}>History</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=27")}>Horror</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=10402")}>Music</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=9648")}>Mystery</button>
        </div>
        <div>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=10749")}>Romance</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=878")}>Science Fiction</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=10770")}>TV Movie</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=53")}>Thriller</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=10752")}>War</button>
            <button onClick={()=>setUrl("https://api.themoviedb.org/3/discover/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&with_genres=37")}>Western</button>
        </div>
    </div>
  )
}

export default Genre