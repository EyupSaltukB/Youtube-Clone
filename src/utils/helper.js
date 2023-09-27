import axios from "axios";
import {options} from "./constants"

axios.defaults.baseURL = "https://youtube138.p.rapidapi.com/video";

export const getData = async (url) => {
    const res = await axios.get(url, options);
    return res.data;
}