import React from 'react';
import { useParticularUserData } from '../Hooks/useParticularUserData';
import { useParams } from 'react-router-dom';

const RQUser = () => {

    const { id } = useParams()

    const { data, isLoading, isError, error } = useParticularUserData(id);

    if (isLoading) {
        return <div className="m-5">
            <h2>Loading...</h2>
        </div>
    }

    if (isError) {
        return <div className="m-5">
            <h2>{error.message}</h2>
        </div>
    }

    console.log("Dataaaaaaaaaaaaa", data);

    return (
        <>
            <div className="m-5">
                <h1>User Details</h1>
                {
                    !data ? ("No data found") : (
                        <table className="table table-dark table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>website</th>
                                    <th>Address (City)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.data.id}</td>
                                    <td>{data.data.name}</td>
                                    <td>{data.data.username}</td>
                                    <td>{data.data.email}</td>
                                    <td>{data.data.phone}</td>
                                    <td>{data.data.website}</td>
                                    <td>{data.data.address.city}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>
        </>
    )
};

export default RQUser;
