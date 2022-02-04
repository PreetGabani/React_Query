import { useQuery } from 'react-query';
import axios from 'axios';

const fetch = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export const useParticularUserData = (id) => {
    return useQuery(['users',id],()=>fetch(id))
}