import React, { useState,useEffect } from 'react'
import axios from '../../Axios/axios'

import './Banner.css'
import { imageUrl } from '../../utils/utils'
function Banner(props){
   const [movie, setMovie] = useState()
   useEffect(() => {
      axios.get(`${props.trending}`).then((res)=>{
    
          setMovie(res.data.results[5])
      })
    
    },[props.trending])
   
    return (
      
      <div className='banner' style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path : '' })`}}>
          <div className='content'>
              <h1 className="title">{movie?movie.original_title || movie.name :''}</h1>
              
              <div className="banner_butons">
                <button className='button'>Play </button>
                <button className='button'>My List </button>
              </div>
              <h1 className="description"> {movie?movie.overview :''}</h1>
          </div>
          <div className="fade_bottom"></div>
      </div>
    )

}

export default Banner

