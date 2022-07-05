import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
    headers: {
    'X-RapidAPI-Key': 'f2ec3e9301msh295cea3b30e1927p1a7d05jsn39fdc3260ed1',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        } 
    });
    return data;
}