import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

const fetchParticularUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

const ParallelQueries = () => {

    const { data: User } = useQuery('user', fetchUser)
    const { data: SingleUser } = useQuery('singleUser', fetchParticularUser)

    return (
        <>

        </>
    )
};

export default ParallelQueries;


// ------------------------------------------------
// In routing:- calling Component give dynamic id  id=[1,5]
{/* <Route exact path="/DynamicQueries" >
    <DynamicQueries id={[1, 5]} />
</Route> */}

// Dynamic Parallel Queries

// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetch = (id) => {
//     return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
// }

// export const useParticularUserData = ({id}) => {
//     const queryResult =  useQuery(
//         id.map((id)=>{
//             return{
//                 queryKey:['user',id],
//                 queryFn:()=>fetch(id),
//             }
//         })
//     )
//     console.log(queryResult);
//     return(
//         <>

//         </>
//     )
// }


