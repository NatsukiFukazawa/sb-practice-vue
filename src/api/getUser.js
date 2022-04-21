import axios from 'axios'

async function getUser(obj,url){
    params = JSON.stringify(obj)
    
    try{
        const response = await axios.get(str(url),params,{ResponseType:'application/json'})
        console.log(data);
        return response.data
    }   
    catch(e){
        const {
            status,
            statusText
        } = error.response;
        console.log(`Error! HTTP Status: ${status} ${statusText}`);
    }   
} 

export default {
    getUser
}

