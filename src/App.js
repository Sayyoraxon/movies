import { useEffect, useState, useCallback } from 'react';
import MovieCard from './MovieCard';
import Actors from './Actors';
import Genre from './Genre';
import YouTube from 'react-youtube';
import './App.css';

function App() {
  

  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=45fcc9ccd1a493936eb3744a40e11fc4&query="

  const API_image="https://image.tmdb.org/t/p/w1280/"

  const API_IMAGE="https://image.tmdb.org/t/p/w500/"

  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=45fcc9ccd1a493936eb3744a40e11fc4")  
  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')
  const [selectMovie, setSelectMovie] = useState([])
  const [key, setKey] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [genre, setGenre] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [casts, setCasts] = useState([])

  const getData = useCallback (async()=>{
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
    setSelectMovie(data.results[0])
    handleGenre(data.results[0].genre_ids)
    actors(data.results[0].id)
  }, [url])

  const actors = async(id) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=45fcc9ccd1a493936eb3744a40e11fc4&language=en-US`)
    const data = await res.json()
    setCasts(data.cast)
  }

  useEffect(()=>{
    getData()
  }, [getData])

  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const handleSearch = (e) => {
    e.preventDefault()
    getData(API_SEARCH+term)  
  }

  const handleGenre = (ids) =>{
    const genres = ids.map((id)=>{
    let movie_genre;
    if(id===28){
      movie_genre = 'Action'
    }else if(id===12){
      movie_genre = 'Advanture'
    }else if(id===16){
      movie_genre = 'Animation'
    }else if(id===35){
      movie_genre = 'Comedy'
    }else if(id===80){
      movie_genre = 'Crime'
    }else if(id===99){
      movie_genre = 'Documentory'
    }else if(id===18){
      movie_genre = 'Drama'
    }else if(id===10751){
      movie_genre = 'Family'
    }else if(id===14){
      movie_genre = 'Fantasy'
    }else if(id===36){
      movie_genre = 'History'
    }else if(id===27){
      movie_genre = 'Horror'
    }else if(id===10402){
      movie_genre = 'Music'
    }else if(id===9648){
      movie_genre = 'Mystery'
    }else if(id===10749){
      movie_genre = 'Romance'
    }else if(id===878){
      movie_genre = 'Science Fiction'
    }else if(id===10770){
      movie_genre = 'TV Movie'
    }else if(id===53){
      movie_genre = 'Thriller'
    }else if(id===53){
      movie_genre = 'War'
    }else if(id===37){
      movie_genre = 'Western'
    }
    return movie_genre
  })
  setGenre(genres)
  }

  const playTrailer = (id) =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=45fcc9ccd1a493936eb3744a40e11fc4&append_to_response=videos`)
    .then((res)=>res.json())
    .then((data)=>{
      setKey(data.videos.results[0].key)
    })
  }

  return (
    <div className="App">
      <Genre setUrl={setUrl}/>
      <div className="search_nav">
        <div className = "title">
          <h1>Movies</h1>
        </div>
        <div className = "search_box">
          <form onSubmit = {handleSearch}>
            <input onChange={(e)=>setTerm(e.target.value)}/>
            <button>Search</button>
          </form>
        </div>
      </div>
      {isActive && <div className="play">
        <YouTube videoId={key}/>
        <button className="button close" onClick={()=>{setIsActive(false)}}>Close</button>
      </div>}
      <div className = "hero" style ={{backgroundImage: windowSize>800 ? `url('${ API_image+selectMovie.backdrop_path}')` : ''}}>
        <div className="hero_img">
          <img src = {selectMovie.poster_path !== null ? API_IMAGE+selectMovie.poster_path : "https://unsplash.com/photos/EEZgog4AS5M"} alt='imag'/>
        </div>
        <div className="hero_content">
          <h1 className = "hero_title">{selectMovie.title}</h1>
          <p className='h_vote'>{selectMovie.vote_average}</p>
          <div className="hero_genre">{genre.map((i)=>(
            <p>{i}</p>
          ))}</div>  
          {selectMovie.overview ? <div className="hero_overview">{selectMovie.overview}</div> : null}
          <button className = "button" onClick = {()=>{playTrailer(selectMovie.id)
            setIsActive(true)}}>Play Trailer</button>
        </div>  
      </div>
      <Actors actors = {casts}/>
      <div className="movies">
        {movies.map((movie)=>(
          <MovieCard movie = {movie} setSelectMovie={setSelectMovie} setGenre={handleGenre} actors={actors}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
