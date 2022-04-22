import axios from 'axios';


async function testapi () {
    const apiurl = 'https://jsonplaceholder.typicode.com/users/'
    const res = axios.get(apiurl);
    // const test = await res.json();
    return res;
  }

export default testapi