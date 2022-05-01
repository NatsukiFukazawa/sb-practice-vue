import axios from 'axios';


export default function addreview(body){

    const url = "http://localhost:8080/api/product/review"
    
    return axios.post(url,body)
}