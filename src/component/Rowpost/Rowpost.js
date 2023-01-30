
import React, {useState ,useEffect } from "react";
import './Rowpost.css'
import axios from '../../Axios/axios'
import { API_KEY, imageUrl } from "../../utils/utils";
import YouTube from "react-youtube";
function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [videoID, setVideoID] = useState('')
  useEffect(()=>{
    axios.get(`${props.geners}`).then((res)=>{
      setMovies(res.data.results)
    })
  },[props.geners])
   
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 function handleYT(id){
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      setVideoID(res.data.results[0])
      
    })
}
  return (
    <div className="row">
        <p className="title">{props.title}</p>
        <div className="posters">
             {
              movies.map(movie=>{
                return(
                  <img
                   onClick={()=>{
                    console.log(movie.id)
                    handleYT(movie.id)
                  }}
                   
                  className={`${!props.isSmall ? 'poster' : 'small-poster'}`}  src={imageUrl+movie.backdrop_path} alt="" />
                )
              })
             }
        </div>
        {videoID && <YouTube  videoId={videoID.key} opts={opts}  />}
    </div>
    
  );
}

export default Rowpost;
