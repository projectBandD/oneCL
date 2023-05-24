import axios from 'axios'

const base_url="http://localhost:3010";

export const login = async (data) => {
    console.log(data.email);
    console.log(data.password);
    let response = await axios.get(`${base_url}/user/findUserByName`, { mail: data.email, password: data.password });
    return response;
}