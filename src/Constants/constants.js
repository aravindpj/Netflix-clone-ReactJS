import { API_KEY } from "../utils/utils";

export const trending=`/trending/all/day?api_key=${API_KEY}`
export const action=`/discover/movie?api_key=${API_KEY}`
export const originals =`/discover/tv?api_key=${API_KEY}&with_networks=213`
export const ComedyMovies =`/discover/tv?api_key=${API_KEY}&with_networks=35`
export const HorrorMovies =`/discover/tv?api_key=${API_KEY}&with_networks=27`
export const Documentaries =`/discover/tv?api_key=${API_KEY}&with_networks=99`