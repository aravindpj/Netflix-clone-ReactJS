import axios from "axios"
import {Url} from "../utils/utils"
const endpoint=axios.create({
    baseURL:Url
})

export default endpoint