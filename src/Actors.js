import React from 'react'
import './Actors.css'

const API_IMAGE="https://image.tmdb.org/t/p/w300/"

function Actors({actors}) {
  return (
     <>
     <h2 style={{color: 'white'}}>CASTS</h2>
    <div className='actor_cards'>
     {actors.map((actor)=>(
          <div key = {actor.id} className='actor_card'>
               <div className='img_card'>
                    <img src = {actor.profile_path !== null ? API_IMAGE+actor.profile_path : "https://unsplash.com/photos/EEZgog4AS5M"} alt="photoOfActor"/>
               </div>
               <div className='actor_info'>
                    <p>{actor.name}</p>
                    <p className='character'><small>{actor.character}</small></p>
               </div>
          </div>
     ))}
    </div>
    </>
  )
}

export default Actors