import axios from "axios";


async function getProduct(){
    
    //const apiurl = url
    const endpoint = "/api/product"
    const baseurl = "http://ec2-54-179-114-169.ap-southeast-1.compute.amazonaws.com:8080/sb_practice_back"
    const apiurl = baseurl + endpoint 
    /*
    const res = await fetch(apiurl);
    const products = await res.json();
    return products
    */

    
    const result = [{
        productId:1,
        productName:"test",
        review:['222','111'],
        image:"https://fileserver.com",
    }];
        
    
    
    return result
    
} 

export default getProduct
