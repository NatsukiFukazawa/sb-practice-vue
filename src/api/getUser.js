import axios from 'axios'

async function getUser(obj,url){
    params = JSON.stringify(obj)
    
    //const apiurl = url
    const apiurl = "http://ec2-54-179-114-169.ap-southeast-1.compute.amazonaws.com:8080/sb_practice_back"
    try{

      

        return response = await axios.get(str(apiurl),params,{ResponseType:'application/json'})

    }   
    catch(e){
        const {
            status,
            statusText
        } = e.response;
        console.log(`Error! HTTP Status: ${status} ${statusText}`);
    }   
} 

export default getUser


