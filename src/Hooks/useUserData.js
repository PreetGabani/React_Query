import { useQuery } from 'react-query';
import axios from 'axios';

const fetch = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const useUserData = (onSuccess, onError) => {
    return useQuery('users', fetch, {
        // cacheTime: 5000,//Default 5 Min
        // staleTime: 5000, //Default 0
        // refetchOnMount:true, //always true (better option)
        // refetchOnWindowFocus:true,
        // refetchInterval:3000,
        // refetchIntervalInBackground:true,
        enabled: false,
        onSuccess,
        onError,
        // select:(item)=>{
        //     const DataTransformation = item.data.map((item)=> item.id);
        //     return DataTransformation
        // }
    })
}